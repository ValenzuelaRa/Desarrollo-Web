import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(){
    
   try {
    
    const futbolistas = await prisma.futbolistas.findMany()
    return NextResponse.json(futbolistas)

} catch (error){
    if(error instanceof Error){
        return NextResponse.json({
            mensaje: 'hubo un error'
        },
        {
            status: 500
        })
    }
}
}

export async function POST(request){
    try {
    const {nombre,posicion,nivel} = await request.json()
    prisma.futbolistas.create({data:{
        nombre: nombre,
        posicion: posicion,
        nivel: nivel
    }})
    console.log(body); 
    return NextResponse.json(futbolistas)
    
} catch (error){
    if(error instanceof Error){
        return NextResponse.json({
            mensaje: 'hubo un error'
        },
        {
            status: 500
        })
    }
}
}

