import { NextResponse } from "next/server";
import { todos, updateTodos } from "./todo";


export async function GET() {
    NextResponse.json(
        {
            message:'get all todos',
            todos,
            id,
        },
        {status :202}
    )

}

export async function POST(request){
    const data = await  request.json()
    updateTodos([
        ...todos,

        {
            title:data.title,
            id:Date.now(),
        },
    ])
    console.log(data);
    
    return NextResponse.json({message:"add successfully",todos,},
        { status: 201 }
    )
}