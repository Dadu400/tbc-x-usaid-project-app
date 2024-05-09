import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.pathname.replace('/api/delete-user/', '');
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
        return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }
    try {
        const result = await sql`DELETE FROM users WHERE id = ${userId};`;
        if (result.rowCount === 0) {
            return NextResponse.json({ error: 'User not found or already deleted' }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
    return NextResponse.json({ message: 'User successfully deleted' }, { status: 200 });
}
