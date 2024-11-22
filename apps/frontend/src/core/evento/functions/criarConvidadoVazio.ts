import { Id } from "@/core";
import Convidado from "../model/Convidado";

export default function criarConvidadoVazio(): Partial<Convidado> {
    return {
        id: Id.novo(),
        nome: "",
        email: "",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
    }
}