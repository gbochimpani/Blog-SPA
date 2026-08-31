import { Link } from "react-router-dom";
import { noticias } from "../../data/noticias";

export default function Home() {
  const listaNoticias = noticias.slice(0, 5);

  return (
    <div className="home">
      <h1>Notícias</h1>

      <div className="lista-noticias">
        {listaNoticias.map((noticia) => (
          <article className="card" key={noticia.id}>
            <h2>{noticia.titulo}</h2>

            <p>{noticia.resumo}</p>

            <img src={noticia.foto} alt="" />
            <br></br>
            <Link to={"/noticias/" + noticia.id}>Leia a notícia completa.</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
