"use client";

import Link from "next/link";
import { ChevronRight, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <main className="pt-24 pb-24 bg-[#f4f7f6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)] font-bold uppercase tracking-wider mb-4">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Trang chủ</Link>
            <ChevronRight size={14} />
            <span className="text-[var(--color-primary)]">Giỏ hàng</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-saira text-[var(--color-text-main)] uppercase leading-tight mb-4">
            Giỏ Hàng <span className="text-[var(--color-primary)]">Của Bạn</span>
          </h1>
          <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto leading-relaxed">
            Kiểm tra lại các thiết bị và vật tư bạn đã chọn trước khi gửi yêu cầu báo giá cho chúng tôi.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center border border-gray-100 max-w-3xl mx-auto">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🛒</span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-4 font-saira">Giỏ hàng đang trống</h2>
            <p className="text-[var(--color-text-muted)] mb-8">Bạn chưa thêm thiết bị hay vật tư nào vào giỏ hàng.</p>
            <Link href="/products" className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-bold uppercase tracking-wider text-sm py-4 px-8 rounded hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg">
              Tiếp tục chọn thiết bị <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-lg p-6 lg:p-10 border border-gray-100">
              <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-bold font-saira text-[var(--color-text-main)] uppercase">Danh sách thiết bị ({cart.length})</h2>
                <button 
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 text-sm font-bold uppercase flex items-center gap-1 transition-colors"
                >
                  <Trash2 size={16} /> Xóa tất cả
                </button>
              </div>

              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-grow text-center sm:text-left">
                      <div className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1">{item.category}</div>
                      <h3 className="text-lg font-bold text-[var(--color-text-main)] leading-tight mb-2">{item.name}</h3>
                      <p className="text-xs text-gray-500">Mã sản phẩm: {item.id}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[var(--color-primary)] font-bold transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="w-10 text-center font-bold text-[var(--color-text-main)]">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[var(--color-primary)] font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                        title="Xóa sản phẩm"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-[var(--color-primary)] rounded-2xl shadow-xl p-8 text-white sticky top-24">
                <h3 className="text-2xl font-bold font-saira uppercase mb-6 pb-4 border-b border-white/20">Thông tin báo giá</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-white/80">Số lượng sản phẩm:</span>
                    <span className="font-bold">{cart.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Tổng thiết bị:</span>
                    <span className="font-bold">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-white/90 italic leading-relaxed">
                      Lưu ý: Đối với máy móc và vật tư công nghiệp, chúng tôi sẽ lập bảng báo giá chi tiết bao gồm chi phí vận chuyển, lắp đặt và chuyển giao công nghệ dựa trên số lượng bạn đã chọn.
                    </p>
                  </div>
                </div>

                <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-white text-[var(--color-primary)] font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                  Gửi yêu cầu báo giá <ArrowRight size={18} />
                </Link>
                
                <Link href="/products" className="block text-center mt-6 text-sm text-white/80 hover:text-white transition-colors underline underline-offset-4">
                  Thêm sản phẩm khác
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
