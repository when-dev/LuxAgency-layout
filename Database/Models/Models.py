from sqlalchemy import Boolean
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.ext.mutable import MutableList
from sqlalchemy.types import ARRAY
from sqlalchemy import DateTime
from datetime import datetime

from Database.Models import Base


class Lead(Base):
    __tablename__ = "leads"
    id = Column(Integer, primary_key=True, index=True)
    lead_type = Column(String, index=True)
    contact_info = Column(String, nullable=True)
    tg_chat_id = Column(String, nullable=True)
    tg_username = Column(String, nullable=True)
    additional_info = Column(String, nullable=True)
    manager = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)


class Manager(Base):
    __tablename__ = "managers"
    id = Column(Integer, primary_key=True, index=True)
    tg_chat_id = Column(String, nullable=True)
    tg_username = Column(String, nullable=True)
    leads_ids = Column((MutableList.as_mutable(ARRAY(String))))