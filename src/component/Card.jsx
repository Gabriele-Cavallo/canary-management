export default function Card({data}) {
    return ( 
        <div className="bg-slate-800 border-2 shadow-lg border-slate-950 rounded-md overflow-hidden text-green-500 text-sm">
            <img className="border-b-2 border-slate-950" style={{ maxHeight: '200px', width: '100%'}} src="/img/canarino.avif" alt={data.anello} />
            <div className="px-5 py-3">
                <p><strong>Anello</strong>: {data.anello}</p>
                <p><strong>Anno di Cova</strong>: {data.annoCova}</p>
                <p><strong>Categoria</strong>: {data.categoria}</p>
                <p><strong>Data di Nascita</strong>: {data.dataNascita}</p>
                <p><strong>Gabbia</strong>: {data.gabbia}</p>
                <p><strong>Giudizio</strong>: {data.giudizio}</p>
                <p><strong>Note</strong>: {data.note}</p>
                <p><strong>Razza</strong>: {data.razza}</p>
                <p><strong>Sesso</strong>: {data.sesso}</p>
                <p><strong>Tipo</strong>: {data.tipo}</p>
            </div>
        </div>
    )
}