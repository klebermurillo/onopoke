// Sistema de Autenticação Simulado
const authSystem = {
  // Usuários de teste
  users: {
    admin: {
      email: "admin@onopoke.com",
      password: "admin123",
      name: "Administrador",
      role: "admin",
      avatar: "👨‍💼"
    },
    cliente: {
      email: "cliente@onopoke.com",
      password: "cliente123",
      name: "João Silva",
      role: "customer",
      avatar: "👤"
    }
  },

  // Estado atual da sessão
  currentSession: null,

  // Login
  login(email, password) {
    for (const [key, user] of Object.entries(this.users)) {
      if (user.email === email && user.password === password) {
        this.currentSession = {
          ...user,
          loginTime: new Date().toLocaleString('pt-BR')
        };
        localStorage.setItem('onoPokeSession', JSON.stringify(this.currentSession));
        return { success: true, user: this.currentSession };
      }
    }
    return { success: false, error: "Email ou senha inválidos" };
  },

  // Logout
  logout() {
    this.currentSession = null;
    localStorage.removeItem('onoPokeSession');
    return { success: true };
  },

  // Verificar sessão
  checkSession() {
    const saved = localStorage.getItem('onoPokeSession');
    if (saved) {
      this.currentSession = JSON.parse(saved);
      return this.currentSession;
    }
    return null;
  },

  // Obter usuário atual
  getCurrentUser() {
    return this.currentSession;
  },

  // Verificar se está autenticado
  isAuthenticated() {
    return this.currentSession !== null;
  },

  // Verificar role
  hasRole(role) {
    return this.currentSession && this.currentSession.role === role;
  }
};

// Inicializar na carga
document.addEventListener('DOMContentLoaded', () => {
  authSystem.checkSession();
});
