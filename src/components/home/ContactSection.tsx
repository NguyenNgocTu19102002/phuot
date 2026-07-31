export default function ContactSection() {
  return (
    <section className="bg-[var(--color-primary)]">
      <div className="flex flex-wrap items-stretch">
        <div className="w-full lg:w-1/2 hidden lg:block">
          <img 
            src="/images/heidelberg.jpg" 
            alt="Yêu cầu báo giá in ấn" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-10 lg:p-20 relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl lg:text-5xl font-bold font-saira uppercase text-white mb-10">
              Yêu cầu báo giá
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Họ và tên" 
                    className="w-full px-5 py-4 rounded bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-bold"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Số điện thoại" 
                    className="w-full px-5 py-4 rounded bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-bold"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Địa chỉ email" 
                    className="w-full px-5 py-4 rounded bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-bold"
                  />
                </div>
                <div>
                  <select className="w-full px-5 py-4 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white focus:bg-white/20 transition-all font-bold appearance-none">
                    <option value="" className="text-gray-900">Chọn dịch vụ</option>
                    <option value="in_bao_bi" className="text-gray-900">In Bao Bì Giấy</option>
                    <option value="in_thuong_mai" className="text-gray-900">In Ấn Thương Mại</option>
                    <option value="tem_nhan" className="text-gray-900">Tem Nhãn & Decal</option>
                    <option value="khac" className="text-gray-900">Khác</option>
                  </select>
                </div>
              </div>
              <div>
                <textarea 
                  rows={5} 
                  placeholder="Ghi chú (Số lượng, quy cách...)" 
                  className="w-full px-5 py-4 rounded bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-bold resize-none"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="w-full bg-white text-[var(--color-primary)] font-bold uppercase tracking-widest py-4 rounded hover:bg-gray-100 transition-colors shadow-lg mt-4"
              >
                Gửi yêu cầu
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
