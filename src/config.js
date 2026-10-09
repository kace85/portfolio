import featuredPreviewImage from './assets/images/krishna-penida-tour-preview.png'
import sudarmaPreviewImage from './assets/images/sudarma-bali-tour-preview.png'

export const portfolioConfig = {
  whatsappNumber: '+62 882-0154-34221',
  liveProjects: [
    {
      name: 'Krishna Penida Tour',
      url: 'https://krishnapenidatour.site.je/',
      image: featuredPreviewImage,
      category: 'Travel · Business website',
      categoryId: 'Wisata · Website bisnis',
      description: 'A travel website designed to showcase destinations and tour packages, while making it easy for potential customers to contact the business.',
      descriptionId: 'Website wisata yang dirancang untuk menampilkan destinasi, paket perjalanan, dan memudahkan calon pelanggan menghubungi bisnis.'
    },
    {
      name: 'Sudarma Bali Tour',
      url: 'https://sudarma-bali-tour.vercel.app/',
      image: sudarmaPreviewImage,
      category: 'Travel · Business website',
      categoryId: 'Wisata · Website bisnis',
      description: 'A live website for Sudarma Bali Tour, helping visitors discover its Bali tour services.',
      descriptionId: 'Website live Sudarma Bali Tour untuk membantu wisatawan mengenal layanan tur di Bali.'
    }
  ]
}
