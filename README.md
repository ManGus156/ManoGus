<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio final</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-image: url('wallpaperflare.com_wallpaper\ \(1\).jpg');
            background-size: cover;
            background-position: center;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        div {
            width: 100%;
            max-width: 500px;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            color: #333333;
            margin-bottom: 20px;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        form label {
            font-size: 14px;
            color: #555555;
            margin-bottom: 5px;
            width: 100%;
            text-align: left;
        }

        form input, form select, form textarea, form button {
            padding: 10px;
            font-size: 14px;
            border: 1px solid #cccccc;
            border-radius: 4px;
            margin-bottom: 15px;
            width: 100%;
        }

        form input:focus, form select:focus, form textarea:focus {
            border-color: #007bff;
            outline: none;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }

        form button {
            background-color: #007bff;
            color: #ffffff;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        form button:hover {
            background-color: #0056b3;
        }

        .checkbox-container, .radio-container {
            display: flex;
            align-items: center;
            gap: 10px;
            width: 100%;
            margin-bottom: 15px;
        }

        .range-value {
            font-size: 14px;
            color: #333333;
            margin-bottom: 15px;
            width: 100%;
            text-align: left;
        }
    </style>
</head>
<body>
    <div>
        <div>
            <h1>Preencha o formulário para se inscrever para a vaga de emprego</h1>
        </div>
        <form>
            <label for="nome">Nome completo:</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required>
            
            <label for="email">Digite seu email:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu email">
            
            <label for="password">Digite sua senha:</label>
            <input type="password" id="password" name="password" placeholder="Ex: Abcd1234" minlength="8">
            
            <label for="data-nascimento">Data de nascimento:</label>
            <input type="date" id="data-nascimento" name="data-nascimento">
            
            <label for="telefone">Número de telefone:</label>
            <input type="tel" id="telefone" name="telefone" placeholder="(99) 99999-9999" pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}" title="Digite no formato (99) 99999-9999" required>
            
            <label>Gênero:</label>
            <div class="radio-container">
                <input type="radio" id="masculino" name="genero" value="masculino" required>
                <label for="masculino">Masculino</label>
                <input type="radio" id="feminino" name="genero" value="feminino">
                <label for="feminino">Feminino</label>
                <input type="radio" id="outros" name="genero" value="outros">
                <label for="outros">Outros</label>
            </div>

            <label for="site-pessoal">Site pessoal:</label>
            <input type="url" id="site-pessoal" name="site-pessoal" placeholder="Digite o link do seu site pessoal">

            <label for="curriculo">Envie seu currículo:</label>
            <input type="file" id="curriculo" name="curriculo" accept=".pdf,.doc,.docx">

            <label for="pretensao-salarial">Pretensão salarial (R$ 1000 - R$ 5000):</label>
            <input type="range" id="pretensao-salarial" name="pretensao-salarial" min="1000" max="5000" step="100" oninput="atualizarValor(this.value)">
            <div class="range-value">Valor selecionado: R$ <span id="valor-salarial">1000</span></div>
            
            <div class="checkbox-container">
                <input type="checkbox" id="novidades" name="novidades">
                <label for="novidades">Quero receber novidades</label>
            </div>

            <label for="comentarios">Comentários:</label>
            <textarea id="comentarios" name="comentarios" rows="4" placeholder="Escreva seus comentários aqui..."></textarea>
            
            <button type="submit">Enviar</button>
        </form>
    </div>

    <script>
        function atualizarValor(valor) {
            document.getElementById('valor-salarial').textContent = valor;
        }
    </script>
</body>
</html>
