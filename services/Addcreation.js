import React from "react";
import { getUserId } from "./Id";
/*  "id_publicacao_prestador": 0, -> automático
  "id_prestador": 0, -> OK
  "id_atividade_prestador": 0, -> Verificar!!
  "descricao_publicacao_prestador": "string", -> ok
  "experiencia_prestador": "string", -> ok 
  "habilidades": "string",
  "qualidades": "string",
  "valor_prestador": 0,
  "forma_de_atendimento_prestador": "string",
  "abordagem": "string",
  "data_publicacao_prestador": "2025-10-09T12:18:51.475Z", -- tem que pegar a do sistema 
  "id_comentario_cliente": 0 --> pode ser null, ent não vou mandar */ 

  //1° vou declarar as variáveis uqe precisam para requisição 

  let id = await getUserId();
  let descricao = "";
  let experiencia = "";
  let habilidades = "";
  let qualidades = "";
  let atendimento = "";
  let abordagem = "";
  let valor = 0;

  //2° fazer os gets e sets
 /*const setDescription = async(description) => {
    descricao = description;
  };
 */