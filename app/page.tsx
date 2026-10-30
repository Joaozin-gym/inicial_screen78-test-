import { createClient } from '@/utils/supabase/server'
import { logout } from './login/actions'

export default async function Index() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Dashboard Protegida</h1>
      <p>Bem-vindo! Você está autenticado como: <strong>{user?.email}</strong></p>
      <form>
        <button formAction={logout} style={{ padding: '10px 20px', background: '#ff4040', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Sair da Conta
        </button>
      </form>
    </div>
  )
}
