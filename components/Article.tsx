import Image from 'next/image'

export default function Article() {
    return (
        <article className="px-6 py-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Hoy, Alejandro Formanchuk, el hombre que le enseña a hablar a las
                empresas</h2>

            <div className="mb-6 relative w-full aspect-[16/9]">
                <Image
                    src="/images/alejandro-formanchuk.webp"
                    alt="Alejandro Formanchuk"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="space-y-4">
                <p className="font-bold">Entrevistador: Alejandro, usted es reconocido como uno de los principales
                    referentes en comunicación organizacional. ¿Cómo llegó a especializarse en este campo?</p>
                <p>Alejandro Formanchuk: Mi interés por la comunicación organizacional surge de mi formación como
                    comunicador social en la Universidad de Buenos Aires, donde me gradué con honores. Siempre me
                    fascinó cómo las organizaciones se comunican no sólo hacia afuera, sino también hacia adentro. Esa
                    curiosidad me llevó a fundar la Asociación Argentina de Comunicación Interna y, más tarde, la
                    Federación Iberoamericana de Comunicación Interna. A lo largo de los años, he trabajado para
                    profesionalizar este campo y posicionarlo como un eje estratégico dentro de las organizaciones.</p>

                <p className="font-bold">Entrevistador: Ha mencionado en varias ocasiones su modelo de comunicación
                    co-creada. ¿De qué se trata exactamente?</p>
                <p>Alejandro Formanchuk: La comunicación co-creada propone romper fronteras tradicionales, ya sea entre
                    lo interno y lo externo, y la frontera de que solo el área de comunicación debe encargarse de la
                    misma. Lo que sucede dentro de una organización no se queda allí, ya que, por ejemplo, un empleado
                    insatisfecho puede compartir su experiencia en redes sociales. Al mismo tiempo, lo que una empresa
                    comunica hacia afuera impacta directamente en su cultura interna. Todo está interconectado.</p>
                <p>En este modelo, no se trata solo de producir campañas o gestionar medios. Cada decisión que toma la
                    organización comunica algo. El salario que pagamos, a quién promocionamos, cómo tratamos a nuestros
                    empleados; todo esto envía mensajes poderosos. Por eso, es fundamental que todos los integrantes de
                    la organización se vean como co-creadores y responsables de la comunicación, y no solo el área de
                    comunicación.</p>

                <p className="font-bold">Entrevistador: ¿Cuál considera que es el error más común en la comunicación
                    organizacional?</p>
                <p>Alejandro Formanchuk: Un error frecuente es creer que los problemas de comunicación se resuelven
                    haciendo más campañas o invirtiendo en nuevas tecnologías. Aunque estos recursos son importantes, no
                    son suficientes por sí solos. Muchas empresas me consultan después de haber invertido grandes sumas
                    en tecnologías o campañas y no obtener los resultados esperados.</p>
                <p>La realidad es que nadie renuncia porque no le gusta una campaña, ni cree en los valores de la
                    empresa solo porque están escritos en un cartel. La verdadera comunicación se basa en la coherencia
                    entre lo que decimos y lo que hacemos. Si proclamamos la innovación como un valor, pero luego no
                    dejamos espacio para las ideas del equipo, estamos enviando un mensaje contradictorio.</p>

                <p className="font-bold">Entrevistador: ¿Cómo influye la comunicación interna en la percepción externa
                    de una organización?</p>
                <p>Alejandro Formanchuk: La comunicación interna bien gestionada es esencial para construir una marca
                    sólida hacia afuera. Por ejemplo, un empleado que se siente cómodo y valorado probablemente hable
                    bien de su empresa en una conversación casual con amigos, convirtiéndose en un embajador de la
                    marca. Por eso digo que hacer comunicación interna también es hacer branding.</p>
                <p>Por otro lado, si la comunicación interna es deficiente, el impacto negativo se verá reflejado en el
                    exterior. Hoy en día, con las redes sociales, un empleado insatisfecho tiene un alcance que antes
                    era inimaginable.</p>

                <p className="font-bold">Entrevistador: ¿Qué consejo le daría a las organizaciones que buscan mejorar su
                    comunicación interna?</p>
                <p>Alejandro Formanchuk: Lo primero es entender que todos son encargados de la comunicación. No solo el
                    área de comunicación tiene responsabilidades, sino que cada miembro de la organización, desde el
                    liderazgo hasta los equipos operativos, contribuyen al mensaje colectivo.</p>
                <p>Es fundamental, pero fundamental,trabajar en la credibilidad. La comunicación más efectiva es aquella
                    que es creíble y coherente. No sirve de nada hablar de valores si estos no se reflejan en las
                    acciones. También hay que evitar el enfoque simplista de creer que más medios o tecnologías
                    solucionarán los problemas. Se trata de gestionar la comunicación como algo transversal y
                    estratégico.</p>

                <p className="font-bold">Entrevistador: ¿Hacia dónde cree que se dirige el futuro de la comunicación
                    organizacional?</p>
                <p>Alejandro Formanchuk: Creo que el futuro pasa por comprender que la comunicación es mucho más que
                    campañas o medios. Es un ecosistema donde cada acción, cada decisión y cada interacción comunica
                    algo. Las organizaciones que entiendan esto tendrán una ventaja competitiva, porque serán capaces de
                    construir una comunicación auténtica, coherente y alineada con sus objetivos estratégicos.</p>

                <p className="font-bold">Entrevistador: Muchas gracias, Alejandro. Que placer fue tenerte, aprendimos
                    muchísimo.</p>
                <p>Alejandro Formanchuk: Muchas gracias por la invitación. Siempre es un gusto hablar de este tema que
                    me apasiona tanto.</p>
            </div>
        </article>
    )
}

