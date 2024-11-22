// gera o apelido do evento
export default class Alias {
    static formatar(valor: string): string {
        return valor.replace(/ /g, "-").toLowerCase();
    }
}