import { TopMenu } from "@/components";

export default function ContactPage() {
  return (
    <>
      <div className="h-fit bg-[url('/clases.jpg')] bg-cover bg-center relative">
        <div className="absolute z-0 inset-0 bg-gradient-to-b from-black/30 to-black/100"></div>

        <div className="relative flex flex-col z-10 justify-center">
          <TopMenu />
          <div className="flex flex-col h-fit my-auto w-fit mx-auto py-52">
            <h1 className="font-bold text-5xl text-center text-white">Contacto</h1>
            <p className="mt-2 text-white w-2/3 mx-auto text-center">No esperes más. Desarrolla tus habilidades y convertite en el jugador más fuerte</p>
          </div>
        </div>
      </div>
      <section className="bg-gradient-to-b from-white flex flex-col md:flex-row to-black h-fit ">
        <div className="md:w-1/2 w-full hidden md:block"><h1>.</h1></div>
        <div className="md:w-1/2 w-full flex flex-col justify-center py-20 px-16 bg-white h-full">
          <h1 className="text-4xl font-bold mb-4">Ponte en contacto con nosotros.</h1>
          <p className="text-gray-600 mb-8">
            Envíanos un mensaje para más información o alguna consulta que tengas.
          </p>

          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border-b-2 border-gray-500 focus:border-black focus:outline-none p-1"
                placeholder=""
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border-b-2 border-gray-500 focus:border-black focus:outline-none p-1"
                placeholder=""
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black">
                Mensaje
              </label>
              <textarea
                id="message"
                className="mt-1 block rounded-none w-full border border-gray-500 focus:border-black focus:rounded-none focus:border-2 p-2 h-32"
                placeholder=""
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800 focus:outline-none"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}