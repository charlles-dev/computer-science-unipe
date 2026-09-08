#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script de Catalogacao e Indexacao com IA (Groq llama-3.3-70b-versatile)
UNIPE - Bacharelado em Ciencia da Computacao
"""

import os
import sys
import json
import urllib.request
import urllib.error

GROQ_API_KEY = os.environ.get("GROQ_API_KEY", "").strip()
GROQ_MODEL = "llama-3.3-70b-versatile"
GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions"

CURRICULO_BASE = {
    "curso": "Bacharelado em Ciência da Computação",
    "instituicao": "UNIPÊ - Centro Universitário de João Pessoa",
    "aluno": "Charlles Augusto",
    "periodo_atual": 1,
    "total_periodos": 8,
    "periodos": [
        {
            "numero": 1,
            "nome": "1º Período Letivo",
            "status": "cursando",
            "disciplinas": [
                {
                    "id": "desenvolvimento-front-end-web",
                    "nome": "Desenvolvimento Front-End para Web",
                    "carga_horaria": "90h",
                    "status": "concluido",
                    "tipo_runner": "web",
                    "descricao": "Construção de aplicações web responsivas, acessíveis e reativas para a ONG Esperança Viva.",
                    "projetos": [
                        {
                            "id": "ep01",
                            "codigo": "EP_01",
                            "titulo": "Estruturação Semântica HTML5",
                            "descricao": "Arquitetura semântica W3C, formulário cadastral modular com fieldsets temáticos e acessibilidade base.",
                            "tipo": "web",
                            "path": "periodo-1/desenvolvimento-front-end-web/Desenvolvimento FrontEnd - Experiência Prática 1/index.html",
                            "tags": ["HTML5", "W3C", "Acessibilidade", "Formulários"],
                            "status": "Validado W3C",
                            "comando_terminal": "run ep01"
                        },
                        {
                            "id": "ep02",
                            "codigo": "EP_02",
                            "titulo": "Design System & CSS Grid",
                            "descricao": "Malha responsiva de 12 colunas, design tokens nativos (:root), flexbox e 5 breakpoints @media.",
                            "tipo": "web",
                            "path": "periodo-1/desenvolvimento-front-end-web/Desenvolvimento FrontEnd - Experiência Prática 2/index.html",
                            "tags": ["CSS Grid", "Flexbox", "Tokens", "Mobile-First"],
                            "status": "Validado CSS",
                            "comando_terminal": "run ep02"
                        },
                        {
                            "id": "ep03",
                            "codigo": "EP_03",
                            "titulo": "Single Page Application Vanilla",
                            "descricao": "Motor de roteamento por hashchange, templates dinâmicos, persistência em localStorage e event delegation.",
                            "tipo": "web",
                            "path": "periodo-1/desenvolvimento-front-end-web/Desenvolvimento FrontEnd - Experiência Prática 3/html/index.html",
                            "tags": ["Vanilla SPA", "Hash Router", "localStorage", "Templates"],
                            "status": "Validado SPA",
                            "comando_terminal": "run ep03"
                        },
                        {
                            "id": "ep04",
                            "codigo": "EP_04",
                            "titulo": "Acessibilidade WCAG 2.1 & Produção",
                            "descricao": "Conformidade WCAG 2.1 AAA, dark mode inteligente, minificação com bundler e deploy contínuo em produção.",
                            "tipo": "web",
                            "path": "periodo-1/desenvolvimento-front-end-web/Desenvolvimento FrontEnd - Experiência Prática 4/html/index.html",
                            "tags": ["WCAG 2.1 AAA", "Dark Mode", "Vite", "CI/CD Pages"],
                            "status": "Produção Final",
                            "comando_terminal": "run ep04"
                        }
                    ]
                },
                {
                    "id": "algoritmos-pensamento-computacional",
                    "nome": "Algoritmos e Pensamento Computacional",
                    "carga_horaria": "90h",
                    "status": "cursando",
                    "tipo_runner": "backend",
                    "descricao": "Fundamentos de lógica algorítmica, estruturas de dados elementares e complexidade assintótica.",
                    "projetos": [
                        {
                            "id": "busca-binaria",
                            "codigo": "ALGO_01",
                            "titulo": "Busca Binária & Análise Assintótica",
                            "descricao": "Implementação interativa de busca binária com cálculo de passos O(log n) vs O(n).",
                            "tipo": "backend",
                            "tags": ["Algoritmos", "Busca Binária", "O(log n)", "Python/JS"],
                            "status": "Ativo no Terminal",
                            "comando_terminal": "run busca-binaria"
                        },
                        {
                            "id": "ordenacao-quicksort",
                            "codigo": "ALGO_02",
                            "titulo": "Ordenação Rápida (QuickSort)",
                            "descricao": "Divisão e conquista, partição de pivô e ordenação comparativa com benchmark de execuções.",
                            "tipo": "backend",
                            "tags": ["Ordenação", "QuickSort", "Recursão", "Backend"],
                            "status": "Ativo no Terminal",
                            "comando_terminal": "run quicksort"
                        }
                    ]
                },
                {
                    "id": "modelagem-banco-dados",
                    "nome": "Modelagem de Banco de Dados",
                    "carga_horaria": "90h",
                    "status": "cursando",
                    "tipo_runner": "fullstack",
                    "descricao": "Modelos conceitual e relacional, diagramas entidade-relacionamento (DER) e normalização SQL.",
                    "projetos": [
                        {
                            "id": "schema-ong",
                            "codigo": "BD_01",
                            "titulo": "Schema Relacional & Consultas SQL",
                            "descricao": "Modelagem 3FN com tabelas de voluntários, doações, projetos sociais e queries simuladas.",
                            "tipo": "fullstack",
                            "tags": ["SQL", "Modelagem DER", "3FN", "PostgreSQL"],
                            "status": "Ativo no Explorer",
                            "comando_terminal": "sql SELECT * FROM voluntarios;"
                        }
                    ]
                },
                {
                    "id": "design-profissional",
                    "nome": "Design Profissional",
                    "carga_horaria": "90h",
                    "status": "concluido",
                    "tipo_runner": "web",
                    "descricao": "Metodologias de design centrado no usuário, tipografia, contraste e arquitetura de informação.",
                    "projetos": [
                        {
                            "id": "guia-estilo-unipe",
                            "codigo": "DS_01",
                            "titulo": "Guia de Estilos & Design Tokens",
                            "descricao": "Manual de identidade visual e especificações de componentes adotados no portal acadêmico.",
                            "tipo": "web",
                            "tags": ["Design Tokens", "UI/UX", "Acessibilidade", "Figma"],
                            "status": "Documentado",
                            "comando_terminal": "cat design-tokens"
                        }
                    ]
                }
            ]
        },
        {
            "numero": 2,
            "nome": "2º Período Letivo",
            "status": "planejamento",
            "disciplinas": [
                {"id": "programacao-computadores", "nome": "Programação de Computadores", "carga_horaria": "90h", "status": "a_cursar", "tipo_runner": "backend"},
                {"id": "engenharia-prompt-ia", "nome": "Engenharia de Prompt para IA", "carga_horaria": "90h", "status": "a_cursar", "tipo_runner": "fullstack"},
                {"id": "prototipagem-sistemas-computacionais", "nome": "Prototipagem de Sistemas Computacionais", "carga_horaria": "90h", "status": "a_cursar", "tipo_runner": "web"},
                {"id": "interface-jornada-usuario", "nome": "Interface e Jornada do Usuário", "carga_horaria": "90h", "status": "a_cursar", "tipo_runner": "web"}
            ]
        },
        {
            "numero": 3,
            "nome": "3º Período Letivo",
            "status": "planejamento",
            "disciplinas": [
                {"id": "estruturas-dados", "nome": "Estruturas de Dados Avançadas", "carga_horaria": "90h", "status": "a_cursar", "tipo_runner": "backend"},
                {"id": "redes-computadores", "nome": "Redes de Computadores", "carga_horaria": "90h", "status": "a_cursar", "tipo_runner": "backend"},
                {"id": "programacao-orientada-objetos", "nome": "Programação Orientada a Objetos", "carga_horaria": "90h", "status": "a_cursar", "tipo_runner": "backend"}
            ]
        },
        {
            "numero": 4,
            "nome": "4º Período Letivo",
            "status": "planejamento",
            "disciplinas": [
                {"id": "sistemas-operacionais", "nome": "Sistemas Operacionais", "carga_horaria": "90h", "status": "a_cursar", "tipo_runner": "backend"},
                {"id": "engenharia-software", "nome": "Engenharia de Software", "carga_horaria": "90h", "status": "a_cursar", "tipo_runner": "fullstack"}
            ]
        },
        {
            "numero": 5,
            "nome": "5º Período Letivo",
            "status": "planejamento",
            "disciplinas": [
                {"id": "inteligencia-artificial", "nome": "Inteligência Artificial & Machine Learning", "carga_horaria": "90h", "status": "a_cursar", "tipo_runner": "fullstack"}
            ]
        },
        {
            "numero": 6,
            "nome": "6º Período Letivo",
            "status": "planejamento",
            "disciplinas": [
                {"id": "compiladores-linguagens", "nome": "Compiladores & Teoria da Computação", "carga_horaria": "90h", "status": "a_cursar", "tipo_runner": "backend"}
            ]
        },
        {
            "numero": 7,
            "nome": "7º Período Letivo",
            "status": "planejamento",
            "disciplinas": [
                {"id": "computacao-nuvem-devops", "nome": "Computação em Nuvem & DevOps", "carga_horaria": "90h", "status": "a_cursar", "tipo_runner": "fullstack"}
            ]
        },
        {
            "numero": 8,
            "nome": "8º Período Letivo",
            "status": "planejamento",
            "disciplinas": [
                {"id": "tcc-computacao", "nome": "Trabalho de Conclusão de Curso (TCC)", "carga_horaria": "120h", "status": "a_cursar", "tipo_runner": "fullstack"}
            ]
        }
    ]
}

def consultar_groq_llama(prompt):
    """Consulta o Groq usando o modelo llama-3.3-70b-versatile"""
    if not GROQ_API_KEY:
        return None
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "User-Agent": "UNIPE-Academic-Hub/2.0"
    }
    
    payload = {
        "model": GROQ_MODEL,
        "messages": [
            {
                "role": "system",
                "content": "Você é o agente de catalogação técnica do portal de Ciência da Computação UNIPÊ. Responda estritamente em JSON com chaves: sumario, tags_recomendadas, comandos_sugeridos."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        "temperature": 0.2,
        "response_format": {"type": "json_object"}
    }
    
    try:
        req = urllib.request.Request(GROQ_ENDPOINT, data=json.dumps(payload).encode("utf-8"), headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            content = data["choices"][0]["message"]["content"]
            return json.loads(content)
    except Exception as e:
        print(f"[Aviso] Falha ao consultar Groq API ({e}). Usando modo determinístico.", file=sys.stderr)
        return None

def main():
    print("--- Iniciando indexador curricular UNIPÊ ---")
    if GROQ_API_KEY:
        print(f"[Groq IA] Chave detectada. Modelo: {GROQ_MODEL}")
        res = consultar_groq_llama("Analise o projeto acadêmico de desenvolvimento front-end web UNIPÊ")
        if res:
            print("[Groq IA] Conexão bem-sucedida com Llama 3.3 70B!")
    else:
        print("[Modo Local] Executando gerador determinístico curricular.")

    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    output_path = os.path.join(repo_root, "catalog.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(CURRICULO_BASE, f, ensure_ascii=False, indent=2)

    print(f"[Sucesso] Manifesto salvo com sucesso em: {output_path}")

if __name__ == "__main__":
    main()
