import {db} from "@/server/db"
export const POST = async (req:Request) => {
    const {data} = await req.json();
    const emailAddress = data.email_addresses[0].email_address;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const imageUrl = data.image_Url;
    const id = data.id;
    //@ts-ignore
   await db.user.upsert({
    where:{id:id},
    create:{emailAddress,firstName,lastName,imageUrl,id},
    update:{emailAddress, firstName, lastName, imageUrl}
   })
    return new Response(`webhook received`, {status:200})
}