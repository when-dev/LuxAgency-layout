import asyncio
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from Database.DAL import ModelsDAL
from Database.Models import Base
from Database.session import engine, async_session

app = FastAPI()


async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


class LeadCreate(BaseModel):
    lead_type: str
    contact_info: str


@app.get("/getme/")
async def getme():
    return {"server in work"}


@app.post("/create_lead/", response_model=LeadCreate)
async def create_lead(lead: LeadCreate):
    async with async_session() as session:
        account_dal = ModelsDAL(session)

    try:
        await account_dal.create_lead(
            lead_type=lead.lead_type,
            contact_info=lead.contact_info,
            tg_chat_id=None,
            tg_username=None,
            manager=None
        )

    except Exception:

        return {"status": "already in database or database run failed"}
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn
    asyncio.run(init_db())
    uvicorn.run(app, host="0.0.0.0", port=8012)
