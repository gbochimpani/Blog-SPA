import { useParams } from "react-router-dom";
import { noticias } from "../data/noticias";

export default function DetalhesNoticia() {
  const { id } = useParams();
  const noticia = noticias.find((noticia) => noticia.id == id);

  return (
    <div>
      <h1>{noticia.titulo}</h1>
      <br />
      <img src={noticia.foto} alt="" />
      <br />
      <p>{noticia.temas}</p>
      <h2>{noticia.resumo}</h2>
      <p>{noticia.textoCompleto}</p>
      <h4>{noticia.autor}</h4>
      <p>{noticia.data}</p>
    </div>
  );
}
