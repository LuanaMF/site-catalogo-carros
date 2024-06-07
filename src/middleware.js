import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';
 

export function middleware(req) {
  const { pathname } = req.nextUrl;
 
  // Verifique se a URL contém "admin"
  const isAdminRoute = pathname.includes('admin');
  const userCookie = Cookies.get('user');
  const isAuthenticated = userCookie !== undefined;


  // Se a rota é admin e o usuário não está autenticado, redirecione para /telaCarros
  if (isAdminRoute && !isAuthenticated) {
    return NextResponse.rewrite(new URL('/telaCarros', req.url))
  }

  // Se não for uma rota admin ou o usuário está autenticado, prossiga normalmente
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/cadastroCarro'
}
