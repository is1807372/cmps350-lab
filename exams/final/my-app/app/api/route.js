import * as Teams from "@/repos/teams";
import prisma from "@/repos/prisma";

export async function get(id) {
    if (!id) {
        try{
      return Response.json(await prisma.team.findMany)({
        include: {
          members: true,
        },
      });}
      catch (error) {
        console.error(error.message);
        return Response.json({ message: "Internal error" }, { status: 500 });
      }
    }
    try{
    return await prisma.team.findUnique({
      where: {
        id,
      },
      include: {
        members: true,
      },
    });}
    catch (error) {
        console.error(error.message);
        return Response.json({ message: "Internal error" }, { status: 500 });
      }
  }
  
  export async function add(data) {
    try{
    return await prisma.team.create({
      data,
    });}
    catch (error) {
        console.error(error.message);
        return Response.json({ message: "Internal error" }, { status: 500 });
      }
  }
  
  export async function update(id, data) {
    try{
    return await prisma.team.update({
      where: { id },
      data,
    });}
    catch (error) {
        console.error(error.message);
        return Response.json({ message: "Internal error" }, { status: 500 });
      }
  }
  
  export async function remove(id) {

    try{
    return await prisma.team.delete({
      where: { id },
    });}
    catch (error) {
        console.error(error.message);
        return Response.json({ message: "Internal error" }, { status: 500 });
      }
  }
  
  
  export async function GET(request, { params }) {
    try{
    return Response.json(await teams.get());}
    catch (error) {
        console.error(error.message);
        return Response.json({ message: "Internal error" }, { status: 500 });
      }
  }
  
  export async function POST(request, { params }) {
    const data = await request.json();
    return Response.json(await teams.add(data));
  }

  
//   import * as tasks from "@/repo/tasks";

//   export async function GET(request) {
//     // console.log(request.nextUrl.searchParams);
//     console.log("request /api/tasks");
  
//     try {
//       // return new Response("Hello!");
//       return Response.json(await tasks.get(), { status: 200 });
    // } catch (error) {
    //   console.error(error.message);
    //   return Response.json({ message: "Internal error" }, { status: 500 });
    // }
//   }
  
//   export async function POST(request) {
//     // console.log(request.nextUrl.searchParams);
//     // tasks?title=Title&completed=false
  
//     try {
//       const data = await request.json();
//       // TODO: check for bad requests and send 400
//       const task = await tasks.add(data);
//       return Response.json(task, { status: 201 });
//     } catch (error) {
//       console.error(error.message);
//       return Response.json({ message: "Internal error" }, { status: 500 });
//     }
//   }
  