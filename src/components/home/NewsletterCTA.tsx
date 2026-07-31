import { company } from "@/data/company";

export default function NewsletterCTA() {
  return (
    <section className="bg-[#f4f7f6] pt-10 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-[var(--color-primary)] rounded-xl p-8 lg:p-12 shadow-xl">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
              <h5 className="font-saira font-bold text-white uppercase text-3xl lg:text-4xl leading-tight">
                Gọi {company.phone} hoặc để lại email nhận bản tin
              </h5>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <form className="relative">
                <input 
                  type="email" 
                  className="w-full py-4 pl-6 pr-40 bg-white rounded-full font-bold text-gray-800 outline-none focus:ring-4 focus:ring-white/30 transition-shadow" 
                  placeholder="Địa chỉ email"
                  required 
                />
                <button 
                  type="button" 
                  className="absolute right-2 top-2 bottom-2 bg-[#ff5e14] hover:bg-[#e0500e] text-white font-saira uppercase font-bold text-lg px-8 rounded-full transition-colors"
                >
                  Theo dõi
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
