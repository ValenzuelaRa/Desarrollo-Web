import { NextResponse } from "next/server";


export async function GET(request, { params: { id } }) {
    const futbolista = await prisma.futbolistas.findFirst({
        where:{
            id: Number(id)
        }
    })

    if(!futbolista) return NextResponse({
        mensaje: 'futbolista no encontrado'
    },{
        status: 404
    })
    return NextResponse.json(futbolista);
}


export function DELETE(request, { params: { id } }) {
    // Usa el valor de `id` en tu lógica de borrado si es necesario
    return NextResponse.json({
        mensaje: `Borrando el futbolista con el ID: ${id}`
    });
}

export function PUT(request, { params: { id } }) {
    const { id, nombre, posicion, nivel } = request.json(); // Obtén los datos del cuerpo de la solicitud
    // Lógica para actualizar el futbolista con el ID `id` usando los nuevos datos
    return NextResponse.json({
        mensaje: `Actualizando el futbolista con el ID: ${id}`
    });
}
