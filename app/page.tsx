'use client'

// Extern framer
import { motion } from 'framer-motion'

// Native framer
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";



//Components
import An1 from './componentes/icons/an1';

// Icons
import { GoHome } from "react-icons/go";
import { PiProjectorScreenLight } from "react-icons/pi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FaRegCalendarMinus } from "react-icons/fa6";
import { GoGitMerge } from "react-icons/go";

//Components
import PercentageChart from './componentes/graphic/line';
import BarChart from './componentes/graphic/other';
import LineChart from './componentes/graphic/line3';
import LineChart_4 from './componentes/graphic/line4';

export default function Home() {
  // States
  const [language, setLanguage] = useState('pt');
  const [menu, setMenu] = useState(false);
  const handleSetMenu = () => {
    setMenu(!menu);
  };

  const [graphicView, setGraphicView] = useState(0)
  const handleSetGraphichView = (id: number) => {

    setGraphicView(0);
    setGraphicView(id);
    console.log(id);
  }


  const router = useRouter();

  const handleScroll = (param: string) => {
    router.push(`#${param}`);
  };


  return (
    <main className="flex w-full h-full justify-center
                    bg-slate-950 text-slate-100 font-extralight">

      <title>
        {language === 'en' ? 'Welcome!' : language === 'es' ? '¡Bienvenido!' : 'Bem-vindo!'}
      </title>


      <div className=" mt-5 fixed flex w-[90%] max-w-[1280px] h-max rounded-md p-3 border border-gray-900 
                        justify-between backdrop-blur-md bg-opacity-70 z-50">

        <a
          href="https://www.instagram.com/jnr.1914/"
          target="_blank"
          rel="noopener noreferrer" >
          <div className="flex justify-center items-center space-x-1 px-6 py-1 rounded-md
                          text-2xl bg-slate-800 font-semibold cursor-pointer ">
            @jnr.1914
          </div>
        </a>


        <div className="flex space-x-3 font-semibold text-1xl select-none">
          <div className="flex justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 rounded-md
                    cursor-pointer hover:bg-slate-900 transition"
            onClick={() => { handleScroll('home') }}>
            <GoHome className="h-6 w-6" />
            <p>{language === 'en' ? 'Home' : language === 'es' ? 'Inicio' : 'Home'}</p>
          </div>

          <div className="flex justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 rounded-md
                    cursor-pointer hover:bg-slate-900 transition"
            onClick={() => { handleScroll('projetos') }}>
            <PiProjectorScreenLight className="h-6 w-6" />
            <p>{language === 'en' ? 'Projects' : language === 'es' ? 'Proyectos' : 'Projetos'}</p>
          </div>

          <div className="flex justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 rounded-md
                    cursor-pointer hover:bg-slate-900 transition"
            onClick={() => { handleScroll('contato') }}>
            <MdOutlineMarkEmailUnread className="h-6 w-6" />
            <p>{language === 'en' ? 'Contact' : language === 'es' ? 'Contacto' : 'Contato'}</p>
          </div>

          <div className="flex justify-center items-center space-x-1 px-4 rounded-md
                    cursor-pointer" onClick={handleSetMenu}>
            <motion.div
              animate={{ rotate: menu ? 90 : 0 }}
              transition={{ duration: 0.5 }}>
              <GoGear className="h-6 w-6" />
            </motion.div>
          </div>

          {menu && (
            <div className='flex w-20 rounded-lg mt-10 h-max py-1 flex-col justify-center items-center
             fixed right-0 bg-slate-900 px-1'>
              <div className='cursor-pointer hover:bg-slate-950 w-full justify-center items-center flex
              rounded-lg'
              onClick={()=>{setLanguage('pt')}}> 
                pt
              </div>
              <div className='cursor-pointer hover:bg-slate-950 w-full justify-center items-center flex
              rounded-lg'
              onClick={()=>{setLanguage('es')}}> 
                es
              </div>
              <div className='cursor-pointer hover:bg-slate-950 w-full justify-center items-center flex
              rounded-lg'
              onClick={()=>{setLanguage('en')}}> 
                en
              </div>
            </div>
          )}
        </div>
      </div>


      {/* bem bolado aqui */}
      <div className="flex justify-center max-w-[1280px] py-5 select-none text-slate-200">
        <div className="flex justify-center flex-col w-[400px] h-max rounded-xl px-7 py-3 sticky top-32 mt-32 border-0.1 border-gray-900 text-slate-300">
          <h1 className="font-medium text-xl">Aguinaldo Freire</h1>
          <div className="mt-5 space-y-3">


            {language === 'pt' && (
              <>
                <p>👋🏻 Olá, sou o Aguinaldo, Analista de Dados.</p>
                <p>
                  Trabalho com análise de dados usando <strong>Python</strong>, <strong>SQL</strong>, e
                  ferramentas de BI como <strong>Power BI</strong> e <strong>Tableau</strong>.
                </p>
                <p>
                  Tenho experiência em <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong> e em Cloud com <strong>AWS</strong> e <strong>GCP</strong>.
                </p>
              </>
            )}

            {language === 'en' && (
              <>
                <p>👋🏻 Hello, I'm Aguinaldo, a Data Analyst.</p>
                <p> I work with data analysis using <strong>Python</strong>, <strong>SQL</strong>, and BI tools like <strong>Power BI</strong> and <strong>Tableau</strong>.</p>
                <p> I have experience with <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, and Cloud with <strong>AWS</strong> and <strong>GCP</strong>.</p>
              </>
            )}

            {language === 'es' && (
              <><p>👋🏻 Hola, soy Aguinaldo, Analista de Datos.</p>
                <p>Trabajo con análisis de datos usando <strong>Python</strong>, <strong>SQL</strong>, y herramientas de BI como <strong>Power BI</strong> y <strong>Tableau</strong>.</p>
                <p>Tengo experiencia con <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong> y en la nube con <strong>AWS</strong> y <strong>GCP</strong>.
                </p>
              </>
            )}
          </div>

          <div className='flex w-full space-x-2 mt-8'>
            <div className="flex w-full justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 cursor-pointer p-2 rounded-full hover:bg-slate-900 transition text-sm">
              <FaGithub className='w-6 h-6' />
              <a
                href="https://github.com/AguinaldoDs"
                target="_blank"
                rel="noopener noreferrer">
                <p>{language === 'en' ? 'GitHub' : language === 'es' ? 'GitHub' : 'GitHub'}</p>
              </a>
            </div>

            <div className="flex w-full justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 cursor-pointer p-2 rounded-full hover:bg-slate-900 transition">
              <HiOutlineNewspaper className='w-6 h-6' />
              <p className='text-sm'>{language === 'en' ? 'Resume' : language === 'es' ? 'Resumen' : 'Resumo'}</p>
            </div>

            <div className="flex w-full justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 cursor-pointer p-2 rounded-full hover:bg-slate-900 transition">
              <FaRegCalendarMinus className='w-6 h-6' />
              <p className='text-sm'>{language === 'en' ? 'Agenda' : language === 'es' ? 'Agenda' : 'Agenda'}</p>
            </div>
          </div>




        </div>

        <div className='flex flex-col px-3 mt-32 text-4xl font-thin '>

          {language === 'es' && (
            <>
              <div className='flex text-4xl'>
                Innovando con soluciones digitales para Datos.
              </div>
              <div className='text-lg font-normal py-1 pb-4 opacity-30 border-b-0.1'>
                Analista y Arquitecto de Datos
              </div>
            </>
          )}

          {language === 'en' && (
            <>
              <div className='flex text-4xl'>
                Innovating with digital solutions for Data.
              </div>
              <div className='text-lg font-normal py-1 pb-4 opacity-30 border-b-0.1'>
                Data Analyst & Architect
              </div>
            </>
          )}

          {language === 'pt' && (
            <>
              <div className='flex text-4xl'>
                Inovando com soluções digitais para Dados.
              </div>
              <div className='text-lg font-normal py-1 pb-4 opacity-30 border-b-0.1'>
                Analista & Arquiteto de Dados
              </div>
            </>
          )}





          <div className='flex w-full text-lg justify-evenly font-normal text-slate-200 mt-4' >
            {language === 'es' && (
              <>
                <div className=''>
                  <div>São Paulo, Brasil</div>
                  <p className='text-sm text-slate-500'>Ubicación</p>
                </div>

                <div className=''>
                  <div>+3 años</div>
                  <p className='text-sm text-slate-500'>Experiencia</p>
                </div>

                <div className=''>
                  <div>+15 Proyectos</div>
                  <p className='text-sm text-slate-500'>Proyectos y servicios</p>
                </div>
              </>
            )}

            {language === 'en' && (
              <>
                <div className=''>
                  <div>São Paulo, Brazil</div>
                  <p className='text-sm text-slate-500'>Location</p>
                </div>

                <div className=''>
                  <div>+3 years</div>
                  <p className='text-sm text-slate-500'>Experience</p>
                </div>

                <div className=''>
                  <div>+15 Projects</div>
                  <p className='text-sm text-slate-500'>Projects & Services</p>
                </div>
              </>
            )}

            {language === 'pt' && (
              <>
                <div className=''>
                  <div>São Paulo, Brasil</div>
                  <p className='text-sm text-slate-500'>Localização</p>
                </div>

                <div className=''>
                  <div>+3 anos</div>
                  <p className='text-sm text-slate-500'>Experiência</p>
                </div>

                <div className=''>
                  <div>+15 Projetos</div>
                  <p className='text-sm text-slate-500'>Projetos & Serviços</p>
                </div>
              </>
            )}

          </div>





          <div className='mt-10 text-2xl font-normal'
            id='projetos'>
            <div className='px-2'>
              {language === 'en' ? 'Experiences' : language === 'es' ? 'Experiencias' : 'Experiências'}
            </div>

            <div>
              <An1 language={language} />
            </div>
            <div className="mt-10 px-2">
              {language === 'en' ? 'Latest Works' : language === 'es' ? 'Últimos Trabajos' : 'Últimos Trabalhos'}
            </div>

            <div className='font-extralight space-y-4 mt-2 w-full'
              onMouseLeave={() => { handleSetGraphichView(0) }}>
              <motion.div
                className='border-0.1 rounded-2xl p-6 pb-20 border-gray-900 cursor-pointer hover:bg-slate-900 transition-all'
                onMouseEnter={() => { handleSetGraphichView(1) }}
              >
                {language === 'es' && (
                  <>
                    <h1 className='flex text-xl font-normal gap-1'>Previsión de recuperación <GoGitMerge /></h1>
                    <p className='text-sm'>Herramientas: Python, ARIMA, XGBoost</p>
                    <p className='text-sm'>Resultado: Aumento del 15% en la precisión de las previsiones, optimizando inventarios y costos.</p>
                  </>
                )}

                {language === 'en' && (
                  <>
                    <h1 className='flex text-xl font-normal gap-1'>recovery Forecast <GoGitMerge /></h1>
                    <p className='text-sm'>Tools: Python, ARIMA, XGBoost</p>
                    <p className='text-sm'>Result: 15% increase in forecast accuracy, optimizing inventory and costs.</p>
                  </>
                )}

                {language === 'pt' && (
                  <>
                    <h1 className='flex text-xl font-normal gap-1'>Previsão de recuperação <GoGitMerge /></h1>
                    <p className='text-sm'>Ferramentas: Python, ARIMA, XGBoost</p>
                    <p className='text-sm'>Resultado: Aumento de 15% na precisão das previsões, otimizando estoque e custos.</p>
                  </>
                )}


                {graphicView === 1 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  >
                    <PercentageChart language={language} />
                  </motion.div>) : null}
              </motion.div>

              <motion.div
                className='border-0.1 rounded-2xl p-6 pb-20 border-gray-900 cursor-pointer hover:bg-slate-900 transition-all'
                onMouseEnter={() => { handleSetGraphichView(2) }}
                initial={{ opacity: 0, scale: 1 }}  // Inicializa com um pequeno scale
                animate={{ opacity: 1, scale: graphicView === 2 ? 1.05 : 1 }}   // Aumenta ou diminui o scale conforme a condição
                transition={{ duration: 0.4, ease: "easeInOut" }}  // Transição suave
              >
                {language === 'es' && (
                  <>
                    <h1 className='flex text-xl font-normal gap-1'>Segmentación de Mercado <GoGitMerge /></h1>
                    <p className='text-sm'>Herramientas: SQL, R, K-Means</p>
                    <p className='text-sm'>Resultado: Identificación de 4 nuevos segmentos, aumento del 20% en la tasa de conversión.</p>
                  </>
                )}

                {language === 'en' && (
                  <>
                    <h1 className='flex text-xl font-normal gap-1'>Market Segmentation <GoGitMerge /></h1>
                    <p className='text-sm'>Tools: SQL, R, K-Means</p>
                    <p className='text-sm'>Result: Identification of 4 new segments, 20% increase in conversion rate.</p>
                  </>
                )}

                {language === 'pt' && (
                  <>
                    <h1 className='flex text-xl font-normal gap-1'>Segmentação de Mercado <GoGitMerge /></h1>
                    <p className='text-sm'>Ferramentas: SQL, R, K-Means</p>
                    <p className='text-sm'>Resultado: Identificação de 4 novos segmentos, aumento de 20% na taxa de conversão.</p>
                  </>
                )}


                {graphicView === 2 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  >
                    <BarChart language={language} />
                  </motion.div>) : null}
              </motion.div>

              {/* Análise de Sentimento em Redes Sociais */}
              <motion.div
                className='border-0.1 rounded-2xl p-6 pb-20 border-gray-900 cursor-pointer hover:bg-slate-900 transition-all'
                onMouseEnter={() => { handleSetGraphichView(3) }}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: graphicView === 3 ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {language === 'es' && (
                  <>
                    <h1 className='flex text-xl font-normal gap-1'>Análisis de Sentimiento en Redes Sociales <GoGitMerge /></h1>
                    <p className='text-sm'>Herramientas: Python, NLP, TensorFlow</p>
                    <p className='text-sm'>Resultado: Respuesta rápida a crisis de imagen, mitigando impactos negativos.</p>
                  </>
                )}

                {language === 'en' && (
                  <>
                    <h1 className='flex text-xl font-normal gap-1'>Social Media Sentiment Analysis <GoGitMerge /></h1>
                    <p className='text-sm'>Tools: Python, NLP, TensorFlow</p>
                    <p className='text-sm'>Result: Quick response to image crises, mitigating negative impacts.</p>
                  </>
                )}

                {language === 'pt' && (
                  <>
                    <h1 className='flex text-xl font-normal gap-1'>Análise de Sentimento em Redes Sociais <GoGitMerge /></h1>
                    <p className='text-sm'>Ferramentas: Python, NLP, TensorFlow</p>
                    <p className='text-sm'>Resultado: Resposta rápida a crises de imagem, mitigando impactos negativos e ações judiciais.</p>
                  </>
                )}

                {graphicView === 3 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  >
                    <LineChart language={language} />
                  </motion.div>) : null}
              </motion.div>

              {/* Otimização Logística com Big Data */}
              <motion.div
                className='border-0.1 rounded-2xl p-6 pb-20 border-gray-900 cursor-pointer hover:bg-slate-900 transition-all'
                onMouseEnter={() => { handleSetGraphichView(4) }}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: graphicView === 4 ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >

                {language === 'es' && (
                  <>
                    <h1 className='flex text-xl font-normal gap-1'>Optimización Logística con Big Data <GoGitMerge /></h1>
                    <p className='text-sm'>Herramientas: Hadoop, Spark, SQL</p>
                    <p className='text-sm'>Resultado: Reducción del 25% en los costos logísticos, mejora en la entrega y eficiencia.</p>
                  </>
                )}

                {language === 'en' && (
                  <>
                    <h1 className='flex text-xl font-normal gap-1'>Logistics Optimization with Big Data <GoGitMerge /></h1>
                    <p className='text-sm'>Tools: Hadoop, Spark, SQL</p>
                    <p className='text-sm'>Result: 25% reduction in logistics costs, improvement in delivery and efficiency.</p>
                  </>
                )}

                {language === 'pt' && (
                  <>
                    <h1 className='flex text-xl font-normal gap-1'>Otimização Logística com Big Data <GoGitMerge /></h1>
                    <p className='text-sm'>Ferramentas: Hadoop, Spark, SQL</p>
                    <p className='text-sm'>Resultado: Redução de 25% nos custos logísticos, melhoria na entrega e eficiência.</p>
                  </>
                )}

                {graphicView === 4 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  >
                    <LineChart_4 language={language} />
                  </motion.div>) : null}
              </motion.div>

              {/* Análise de Risco de Crédito */}


            </div>

            <div className="mt-10 px-2">
              {language === 'en' ? 'Contact' : language === 'es' ? 'Contacto' : 'Contato'}
            </div>


            {language === 'es' && (
              <div
                className='border-0.1 rounded-2xl p-6 border-gray-900 hover:bg-slate-900
    text-sm flex'
                id='contato'>
                La mejor manera de contactarme es a través de:
                <a
                  href="mailto:Aguinaldofreire.ds@gmail.com?subject=Oportunidad%20de%20trabajo&body=Hola%2C%0A%0AGuiero%20ponerme%20en%20contacto%20contigo%20para%20discutir%20una%20posible%20oportunidad%20de%20trabajo.%0A%0AGuiero%20agendar%20una%20conversación%20para%20hablar%20más%20sobre%20esto.%0A%0AEspero%20tu%20respuesta.%0A%0ACordialmente%2C%0A"
                >
                  <div className='ml-1 text-green-200 underline cursor-pointer'>Aguinaldofreire.ds@gmail.com</div>
                </a>
              </div>
            )}

            {language === 'en' && (
              <div
                className='border-0.1 rounded-2xl p-6 border-gray-900 hover:bg-slate-900
    text-sm flex'
                id='contato'>
                The best way to contact me is through:
                <a
                  href="mailto:Aguinaldofreire.ds@gmail.com?subject=Job%20Opportunity&body=Hello%2C%0A%0AI%20would%20like%20to%20reach%20out%20to%20you%20to%20discuss%20a%20potential%20job%20opportunity.%0A%0AI%20would%20like%20to%20schedule%20a%20call%20to%20talk%20more%20about%20it.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards%2C%0A"
                >
                  <div className='ml-1 text-green-200 underline cursor-pointer'>Aguinaldofreire.ds@gmail.com</div>
                </a>
              </div>
            )}

            {language === 'pt' && (
              <div
                className='border-0.1 rounded-2xl p-6 border-gray-900 hover:bg-slate-900
    text-sm flex'
                id='contato'>
                A melhor maneira de entrar em contato comigo é através:
                <a
                  href="mailto:Aguinaldofreire.ds@gmail.com?subject=Oportunidade%20de%20trabalho&body=Olá%2C%0A%0AGostaria%20de%20entrar%20em%20contato%20com%20você%20para%20discutir%20uma%20possível%20oportunidade%20de%20trabalho.%0A%0AGostaria%20de%20agendar%20uma%20conversa%20para%20falar%20mais%20sobre%20isso.%0A%0AAguardo%20seu%20retorno.%0A%0AAtenciosamente%2C%0A"
                >
                  <div className='ml-1 text-green-200 underline cursor-pointer'>Aguinaldofreire.ds@gmail.com</div>
                </a>
              </div>
            )}


          </div>
          {language === 'es' && (
            <div className='text-sm mt-10'>
              Construido por Aguinaldo Freire • Hecho con Next.js, TypeScript, Shadcn UI (Tailwind CSS) • Desplegado en Vercel.
            </div>
          )}

          {language === 'en' && (
            <div className='text-sm mt-10'>
              Built by Aguinaldo Freire • Made with Next.js, TypeScript, Shadcn UI (Tailwind CSS) • Deployed on Vercel.
            </div>
          )}

          {language === 'pt' && (
            <div className='text-sm mt-10'>
              Construído por Aguinaldo Freire • Feito com Next.js, TypeScript, Shadcn UI (Tailwind CSS) • Deployed em Vercel.
            </div>
          )}

        </div>

      </div>

    </main>
  );
}
