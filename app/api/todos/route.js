import { NextResponse } from "next/server";
import { todos, updateTodos } from "./todo";
import todosModels from "@/models/todos.models";
import { connectToDatabase } from "@/utils/dbConn";

// export async function GET() {
//    return NextResponse.json(
//         {
//             message:'get all todos',
//             todos,
            
//         },
//         {status :202}
//     )

// }

// export async function POST(request){
//     const data = await  request.json()
//     updateTodos([
//         ...todos,

//         {
//             title:data.title,
//             id:Date.now(),
//         },
//     ])
//     console.log(data);
    
//     return NextResponse.json({message:"add successfully",todos,},
//         { status: 201 }
//     )
// }


export async function  POST(request) {
    try {
        const body=await request.json()
        await connectToDatabase()
        if(!body.title) return NextResponse.json({message:"title is required"},{status:400})
        const newTodo = await todosModels.create({title:body.title})
    return NextResponse.json(
        {message:"new todo add",todo:newTodo},
        {status:201}
    )
    } catch (error) {
        return NextResponse.json(
            {message:"failed to ",error:"error.message"},
            {status:500}
        )
    }
    
}