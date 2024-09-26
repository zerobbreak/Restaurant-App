import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../style";

const BluehillsAbout = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
          <Navbar logoImage="/assets/logo2.svg"/>
      <section className="px-6 py-16 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Founded in June 2012 by Mr. Dumile Badela, Just Badela started as
              a boutique butchery in Emndeni, Soweto. Over the years, it has
              grown into a recognizable brand, attracting clientele from
              surrounding areas and becoming a popular tourist destination in
              Gauteng.
            </p>
            <br />
            <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Just Badela is more than just a restaurant; it's a destination
              where tradition meets modernity. Our new sit-down restaurant
              concept combines a contemporary look and feel with open-plan
              seating, allowing customers to observe the preparation of their
              meals. We blend organic textures with bright lighting to create a
              harmonious atmosphere.
            </p>
            
            <p className="text-lg leading-relaxed mt-4 text-gray-600">
              The concept was born from a gap between traditional Shisanyama
              setups and formal restaurants, leading to the creation of a hybrid
              model that fuses world-class technology with African indigenous
              cuisine.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-gray-600">
              Our commitment to excellence is reflected in our focus on quality,
              hygiene, freshness, and guest satisfaction, delivering an
              authentic South African dining experience that blends heritage
              with modern trends.
            </p>

            
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Meet the Visionary</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Mr. Dumile Badela, the visionary behind Just Badela, holds a
              Bachelor of Commerce degree and an Advanced Diploma in Logistics.
              With experience from South African Breweries and Mmidi Management
              Services, Dumile founded Bellium Trading in 2012, with a vision to
              create a unique South African dining experience that blends
              tradition with modernity.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-gray-600">
              As the owner and General Manager of Just Badela Food & Wine
              Orlando West, Dumile ensures that the restaurant remains true to
              its founding principles.
            </p>
            {/* <img src="/assets/visionary.jpg" alt="Owner" /> */}
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Our Location</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Just Badela Food & Wine is strategically located to serve North
              and West Johannesburg, targeting on-the-go adults and their
              families who appreciate delicious, healthy foods and beverages in
              a welcoming atmosphere.
            </p>
            {/* <img src="/assets/location.jpg" alt="" /> */}
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">
              The Just Badela Experience
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Our menu offers a wide selection of food, wines, and cigars,
              categorized as follows:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 text-gray-700">
              <li>
                <strong>Sides:</strong> Pap, samp, dumplings, rice, chips,
                spinach, veggies, green salad, coleslaw, garlic bread.
              </li>
              <li>
                <strong>Beef:</strong> Grilled ox tongue, beef liver, short rib,
                brisket, T-bone, sirloin, rump, ribeye, fillet, boerewors.
              </li>
              <li>
                <strong>Fish:</strong> Fried/grilled kinglip, hake, yellowtail.
              </li>
              <li>
                <strong>Chicken:</strong> Wings, drumsticks, quarter chicken,
                traditional half chicken (mleqwa), full chicken.
              </li>
              <li>
                <strong>Lamb:</strong> Lamb chops, leg, shoulder, stew, tripe
                (mogodu).
              </li>
              <li>
                <strong>Pork:</strong> Chops, ribs, belly, neck, eisben.
              </li>
              <li>
                <strong>Mixed Grills:</strong> Platters for sharing, including
                beef, chicken, lamb combinations.
              </li>
              <li>
                <strong>Desserts:</strong> Cheesecake, ice cream, vanilla
                custard, strawberries, fruit cocktail.
              </li>
              <li>
                <strong>Beverages:</strong> Extensive wine library, soft drinks,
                hot beverages, beers, champagnes, spirits, cocktails.
              </li>
            </ul>

            {/* <img src="/assets/ourmenu.jpg" alt="" /> */}
          </div>
          <div className="mb-16">
            
            <p className="text-lg leading-relaxed mt-4 text-gray-600">
              Our express concept focuses on the convenience of great food
              prepared on-site and delivered, with limited seating for a quick
              sit-down meal.
            </p>
          </div>
          <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Services</h2>
            <img src="/assets/about.jpg" alt="" />
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default BluehillsAbout;
