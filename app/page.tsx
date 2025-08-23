import { getCurrentSession } from "@/actions/auth";
import HomeBanner from "@/components/HomeBanner";
import { Product } from "@/sanity.types";
import { getAllProducts } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function Home() {
  const { user } = await getCurrentSession();
  const products = await getAllProducts();

  return (
    <React.Fragment>
      <HomeBanner />

      <div className="container px-4 py-10 mx-auto">
        <div className="">
          <h3 className="font-semibold text-lg md:text-2xl text-center mb-8 ">
            <span className="border-b pb-2 px-4">Best Sellers</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
          {products && products.length > 0 ? (
            products.map((product: Product) => (
              <div
                key={product._id}
                className="group relative overflow-hidden flex flex-col h-full cursor-pointer"
              >
                <div className="relative w-full flex items-center justify-center h-[16rem] md:h-[18rem] bg-white p-2 shadow border-b  rounded-2xl hover:rounded-none overflow-hidden">
                  {product.image ? (
                    // Use unoptimized for external URLs if needed
                    <React.Fragment>
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.title || "Product"}
                        className="h-full w-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                        unoptimized
                        width={100}
                        height={100}
                        loading="lazy"
                      />

                      <div className="w-full absolute -right-full group-hover:right-0 bottom-10 transition-all duration-300 p-4 flex flex-col items-end gap-4">
                        <button className="bg-slate-100/80 hover:text-rose-700 text-sm font-medium h-8 w-8 flex items-center justify-center rounded-full shadow">
                          <Heart size={18} />
                        </button>

                        <button className="bg-slate-100/80 hover:text-rose-700 text-sm font-medium h-8 w-8 flex items-center justify-center rounded-full shadow">
                          <Eye size={18} />
                        </button>
                      </div>
                      <button className="w-full absolute -bottom-full group-hover:bottom-0 left-0 transition-all duration-300 bg-white/50 hover:text-rose-700 text-black  text-sm font-medium py-2 px-4 rounded">
                        ADD TO CART
                      </button>
                    </React.Fragment>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-6xl">
                      <span>🛒</span>
                    </div>
                  )}
                </div>
                <div className="p-2">
                  <h2 className="mb-1 text-semibold text-sm line-clamp-1 text-shadow-lg">
                    {product.title}
                  </h2>
                  {product.price && (
                    <p className="text-sm  text-rose-700 font-bold">
                      ₦{product.price}
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No products found.
            </p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
