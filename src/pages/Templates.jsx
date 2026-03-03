import { useProducts } from '../queries/useProducts';

export default function Templates() {
  const { data, isLoading, isError } = useProducts();

  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a] px-4 pb-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold text-white">
            Browse{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
              Templates
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Professional PowerPoint templates for every occasion
          </p>
        </div>

        {/* States */}
        {isLoading && (
          <p className="text-center text-gray-400 text-lg">Loading...</p>
        )}

        {isError && (
          <p className="text-center text-red-400 text-lg">Something went wrong.</p>
        )}

        {/* Product Grid */}
        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {data.map((product) => (
              <div
                key={product.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 group"
              >
                {/* Thumbnail */}
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-yellow-500/10 to-orange-600/10">
                  <img
                    src={product.thumbnail_url}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                      €{(product.price / 100).toFixed(2)}
                    </span>
                    <button className="px-4 py-2 bg-white/10 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-600 text-white hover:text-black rounded-lg transition-all font-medium text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
