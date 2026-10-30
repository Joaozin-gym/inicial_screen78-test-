import { login, signup } from './actions'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string; error?: string }>
}) {
  const params = await searchParams

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif', backgroundColor: '#f5f5f5' }}>
      <form style={{ background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '8px', color: '#333' }}>Entrar no Sistema</h2>
        
        {params.error && <p style={{ color: 'red', fontSize: '14px', margin: 0 }}>{params.error}</p>}
        {params.message && <p style={{ color: 'green', fontSize: '14px', margin: 0 }}>{params.message}</p>}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label htmlFor="email" style={{ fontSize: '14px', color: '#666' }}>E-mail</label>
          <input id="email" name="email" type="email" required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label htmlFor="password" style={{ fontSize: '14px', color: '#666' }}>Senha</label>
          <input id="password" name="password" type="password" required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>

        <button formAction={login} style={{ padding: '12px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Entrar
        </button>
        <button formAction={signup} style={{ padding: '12px', background: 'transparent', color: '#0070f3', border: '1px solid #0070f3', borderRadius: '4px', cursor: 'pointer' }}>
          Cadastrar nova conta
        </button>
      </form>
    </div>
  )
}
