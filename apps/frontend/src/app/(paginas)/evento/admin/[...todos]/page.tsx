export default function PaginaAdminEvento(props: any) {
    const id = props.params.todos[0];
    const senha = props.params.todos[1];

    return (
        <div className="flex flex-col">
            <span>id: {id}</span>
            <span>senha: {senha}</span>
        </div>
    )
}