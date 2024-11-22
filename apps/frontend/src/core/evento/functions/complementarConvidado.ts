import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

export default function complementarConvidado(convidado: Partial<Convidado>): Convidado {
    const erros = validarConvidado(convidado);

    if (erros.length > 0) {
        throw new Error(erros.join("\n"));
    }

    const possuiAcompanhantes = convidado.possuiAcompanhantes && 
        convidado.confirmado &&
        (convidado.qtdeAcompanhantes ?? 0) > 0;

    const convidadoAtualizado = {
        ...convidado,
        qtdeAcompanhantes: possuiAcompanhantes ? convidado.qtdeAcompanhantes : 0,
        possuiAcompanhantes: possuiAcompanhantes
    };

    return convidado as Convidado;
}