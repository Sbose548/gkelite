import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Talent acquisition excellence | GKELITE",
  description: "GKELITE-INFO-Contact",
};

const page = () => {
  return (
    <main className="main">
    <div className="page-title accent-background">
      <div className="container d-lg-flex justify-content-between align-items-center">
        <h1 className="mb-2 mb-lg-0">Service Details</h1>
        
      </div>
    </div>
    <section id="service-details" className="service-details section">

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="services-list">
              <Link href="/service-details/talent_acquisition_excellence" className="active">Talent Acquisition Excellence</Link>
              <Link href="/service-details/dynamic_Digital_marketing_solutions">Dynamic Digital Marketing Solutions</Link>
              <Link href="/service-details/b2b_b2c_sales_mastery">B2B & B2C Sales Mastery</Link>
              <Link href="/service-details/bpo_services">BPO Services</Link>
              <Link href="/service-details/ai_services">AI Services</Link>
            </div>

            <h4>Enim qui eos rerum in delectus</h4>
            <p>Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.</p>
          </div>

          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <img src="/assets/img/services.jpg" alt="" className="img-fluid services-img" />
            <h3>Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas</h3>
            <p>
              Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> <span>Aut eum totam accusantium voluptatem.</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Assumenda et porro nisi nihil nesciunt voluptatibus.</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
            </ul>
            <p>
              Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.
            </p>
            <p>
              Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.
            </p>
          </div>

        </div>

      </div>

    </section>

  </main>
  )
}

export default page