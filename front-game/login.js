new Vue({
    el: '#app',
    data: {
        usuario: '',
        senha: '',
        novoUsuario: {
            usuario: '',
            senha: ''
        },
        exibirFormulario: false,
        exibirErro: false,
        cadastroRealizado: false
    },
    methods: {
        async autenticar() {
            try {
                const response = await axios.post('https://pisafecar.vercel.app/validarUsuario', {
                    usuario: this.usuario,
                    senha: this.senha
                });
                alert(response.data.message);
                if (response.status === 200) {
                    window.location.href = '/dashboard';
                }
            } catch (error) {
                console.error(error);
                this.exibirErro = true;
            }
        },
        async cadastrar() {
            try {
                const response = await axios.post('https://pisafecar.vercel.app/inserirUsuario', {
                    usuario: this.novoUsuario.usuario,
                    senha: this.novoUsuario.senha
                });
                alert(response.data);
                this.cadastroRealizado = true;
            } catch (error) {
                console.error(error);
                alert('Erro ao cadastrar usuário.');
            }
        }
    }
});
