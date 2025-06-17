import os

pasta = "./"

for nome_arquivo in os.listdir(pasta):
    if nome_arquivo.startswith("REA. R. "):
        novo_nome = nome_arquivo.replace("REA. R. ", "X")
        caminho_antigo = os.path.join(pasta, nome_arquivo)
        caminho_novo = os.path.join(pasta, novo_nome)
        os.rename(caminho_antigo, caminho_novo)
        print(f"Renomeado: {nome_arquivo} → {novo_nome}")
