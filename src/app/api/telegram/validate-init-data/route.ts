import {NextRequest, NextResponse} from "next/server";
import crypto from 'crypto'

const token = process.env.BOT_TOKEN as string

export async function POST(request: NextRequest, response: NextResponse){
    const {query} = await request.json()
    const initData = new URLSearchParams( query );
    initData.sort();
    const hash = initData.get( "hash" );
    initData.delete( "hash" );
    const dataToCheck = [...initData.entries()].map( ( [key, value] ) => key + "=" + value ).join( "\n" );
    const secretKey = crypto.createHmac( "sha256", "WebAppData" ).update( token ).digest();

    const _hash = crypto.createHmac( "sha256", secretKey ).update( dataToCheck ).digest( "hex" );

    return Response.json({
        "valid": hash === _hash
    })
}
