import os

from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from Database.Models.Models import Lead, Manager


class ModelsDAL:
    def __init__(self, db_session: AsyncSession):
        self.db_session = db_session

    async def create_lead(
            self,
            lead_type: str = None,
            contact_info: str = None,
            tg_chat_id: str = None,
            tg_username: str = None,
            manager: str = None
    ):
        try:
            lead = Lead(
                lead_type=lead_type,
                contact_info=contact_info,
                tg_chat_id=tg_chat_id,
                tg_username=tg_username,
                manager=manager
            )
            self.db_session.add(lead)
            await self.db_session.commit()
            return lead
        except IntegrityError:
            await self.db_session.rollback()
            return None

    async def get_lead_by_chat_id(self, tg_chat_id: str):
        result = await self.db_session.execute(select(Lead).where(Lead.tg_chat_id == tg_chat_id))
        return result.scalar_one_or_none()

    async def get_lead_by_contact_info(self, contact_info: str):
        result = await self.db_session.execute(select(Lead).where(Lead.contact_info == contact_info))
        return result.scalar_one_or_none()

    async def update_lead(self, lead_id: int, **kwargs):
        lead = await self.db_session.get(Lead, lead_id)
        if lead:
            for key, value in kwargs.items():
                setattr(lead, key, value)
            await self.db_session.commit()
        return lead

    async def create_manager(
            self,
            tg_chat_id: str = None,
            tg_username: str = None,
            leads_ids: list = None
    ):
        try:
            manager = Manager(
                tg_chat_id=tg_chat_id,
                tg_username=tg_username,
                leads_ids=leads_ids
            )
            self.db_session.add(manager)
            await self.db_session.commit()
            return manager
        except IntegrityError:
            await self.db_session.rollback()
            return None

    async def update_manager_leads_ids(self, manager_id: int, new_leads_ids: list):
        manager = await self.db_session.get(Manager, manager_id)
        if manager:
            manager.leads_ids = new_leads_ids
            await self.db_session.commit()
        return manager


