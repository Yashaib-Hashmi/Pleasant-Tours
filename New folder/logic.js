function custom(){
    document.getElementById("search_input").style.outlineColor="white"
}
var products=[
    [1,"Beach Chair","img/BeachChair.jpeg","A beach chair is a portable, foldable seat designed for comfort and relaxation on the beach. Typically lightweight and easy to carry, these chairs often feature adjustable reclining positions and built-in headrests. They are usually made from materials like aluminum or wood for the frame, with durable fabric for the seating. Many beach chairs come with additional features such as cup holders, storage pockets, and canopies for sun protection. Ideal for lounging by the ocean, they provide a convenient way to enjoy a day at the beach in comfort.",7000,"Beaches"],
    [2,"Beach Hand Bag","img/HandBag.jpeg","A beach handbag is a stylish accessory perfect for seaside outings. Made from lightweight materials like canvas or straw, it offers plenty of space for essentials such as sunscreen, towels, and snacks. Many designs feature vibrant colors and patterns, reflecting the relaxed beach vibe. With comfortable handles or straps, it's both functional and fashionable for a day at the shore.",5500,"Beaches"],
    [3,"Umbrella","img/BeachUmbrella.jpeg","An umbrella is a versatile tool designed to provide protection from rain and sun. Its canopy, made of water-resistant or UV-protective fabric, is supported by a collapsible frame of metal or plastic ribs. Umbrellas come in various sizes, from compact travel versions to large patio umbrellas. With a convenient handle for easy carrying, an umbrella is an essential accessory for unpredictable weather.",3000,"Beaches"],
    [4,"Beach Towel","img/towel.jpg","A beach towel is an essential item for any seaside adventure, providing a comfortable place to relax on the sand. Made from absorbent and quick-drying materials, it helps you dry off quickly after a swim. Often featuring vibrant colors and fun patterns, it adds a touch of style to your beach gear. Large and soft, a beach towel offers ample space to lounge and enjoy the sun.",1200,"Beaches"],
    [5,"SurfBoards","img/SurfBoard.jpeg","A surfboard is a sleek and buoyant board used for riding ocean waves. Crafted from materials like fiberglass or foam, it comes in various sizes and shapes to suit different skill levels and surfing styles. Its streamlined design allows for smooth gliding and maneuverability on the water. Essential for any surfer, a surfboard combines functionality with the thrill of wave-riding.",15000,"Beaches"],
    [6,"Men's Beach Dresses","img/DressforMen.jpeg","Men's beach attire typically includes comfortable and casual pieces like swim trunks, lightweight shirts, and flip-flops. Swim trunks often come in vibrant colors and patterns, offering both style and ease of movement in the water. Lightweight, breathable shirts, such as linen or cotton button-downs, provide sun protection while keeping cool. Accessories like hats and sunglasses complete the relaxed, beach-ready look.",2850,"Beaches"],
    [7,"Women's Beach Dresses","img/DressforWomen.jpeg","A women's beach dress is a breezy and comfortable garment perfect for sunny seaside days. Made from lightweight fabrics like cotton or chiffon, it provides a cool and airy feel. Often adorned with vibrant colors and tropical patterns, these dresses capture the essence of summer. Easy to slip on and off, they are ideal for transitioning from beach to boardwalk with effortless style.",2850,"Beaches"],
    [8,"First Aid Kit","img/FirstAidKit.jpeg","A first aid kit is an essential collection of medical supplies for treating minor injuries and emergencies. It typically includes items like bandages, antiseptic wipes, adhesive tape, scissors, and pain relievers. Compact and portable, a first aid kit is ideal for home, travel, and outdoor activities. Having a well-stocked kit ensures quick and effective responses to common health issues.",1600,"Beaches"],
    [9,"LifeJackets","img/Lifejacket.jpeg","A life jacket is a critical safety device designed to keep individuals afloat in water. It is typically made from buoyant materials like foam or inflatable elements to ensure effective buoyancy. Life jackets come in various sizes and designs, often including reflective strips and straps for secure fitting. They are essential for water activities and emergency situations, providing vital protection and peace of mind.",4990,"Beaches"],
    [10,"Beach Balls","img/productbeachball.jpeg","A beach ball is a classic summer toy, designed for fun and play by the water. Its lightweight, inflatable structure makes it easy to toss and bounce around. Typically adorned with bright, eye-catching colors and patterns, it adds a splash of vibrancy to any beach outing. Ideal for group games or solo enjoyment, a beach ball enhances the fun and relaxation of a day in the sun.",1299,"Beaches"],
    [11,"Sunscreen ","img/Sunscreen.jpeg","Sunscreen is essential for protecting your skin from harmful UV rays and preventing sunburn. It helps reduce the risk of skin damage and premature aging by forming a barrier against the sun's radiation. Available in various SPFs and formulations, it caters to different skin types and needs. Regular application is key to maintaining its effectiveness throughout sun exposure.",1200,"Beaches"],
    [12,"Water Sport's Accessories","img/Watersportactivities.jpeg","Water sports accessories enhance the enjoyment and safety of aquatic activities. Essential items include life vests, which provide buoyancy and security, and waterproof cases to protect valuables from water damage. Paddleboards and wetsuits are crucial for activities like surfing or kayaking, offering stability and thermal protection. High-quality and good performance in the water.",10000,"Beaches"],
    [13,"Headlamp or Flashlight","img/Headlamp or flashlight.jpeg","A headlamp provides hands-free illumination, making it ideal for tasks like camping or hiking in low light. Its adjustable strap ensures a secure fit on the forehead, while the beam can often be angled to direct light where needed. In contrast, a flashlight offers versatile lighting with a handheld design, suitable for various situations from power outages to outdoor adventures. Both tools are essential for enhancing visibility and safety in dark environments.",1200,"Hills"],
    [14,"Navigation Tools","img/Navigation tools.jpeg","Navigation tools are essential for guiding travelers accurately from one location to another. Traditional tools include maps and compasses, while modern options feature GPS devices and smartphone apps. They provide real-time directions, track routes, and help avoid obstacles. Whether for hiking, driving, or sailing, these tools enhance safety and efficiency during travel.",1500,"Hills"],
    [15,"Shelter or Sleeping Gear","img/Shelter camp and sleeping gear.jpeg","Shelter or sleeping gear is essential for outdoor adventures, providing protection and comfort in various environments. This category includes tents, sleeping bags, and sleeping pads, designed to ensure a good night’s rest while shielding from the elements. Tents offer a cozy, portable shelter, while sleeping bags provide warmth and insulation. Sleeping pads enhance comfort and insulation from the ground, making outdoor stays more enjoyable and restful.",8000,"Hills"],
    [16,"Cooking Equipments","img/Cooking equipment.jpeg","Cooking equipment includes essential tools such as pots, pans, and utensils used to prepare and cook food. High-quality equipment ensures efficient heat distribution and durability, making meal preparation easier and more enjoyable. Common items include knives, cutting boards, and measuring cups, each designed to enhance precision and safety in the kitchen. Investing in reliable cooking equipment can greatly improve your culinary results and overall cooking experience.",9000,"Hills"],
    [17,"Hydration Gear","img/Hydration gear.jpeg","Hydration gear is essential for staying well-hydrated during physical activities and outdoor adventures. It includes items like water bottles, hydration packs, and portable filters designed for convenience and efficiency. Many products feature ergonomic designs and insulation to keep drinks cool. With built-in compartments and easy-to-use features, hydration gear helps ensure you have access to fresh water whenever you need it.",4000,"Hills"],
    [18,"Footwear","img/Footwear .jpeg","Footwear encompasses a range of shoes and boots designed to protect and support the feet. From casual sneakers to formal dress shoes, each type offers specific benefits for various activities and occasions. Footwear styles often reflect personal taste and trends while ensuring comfort and functionality. Properly chosen footwear can enhance posture and contribute to overall well-being.",3000,"Hills"],
    [19,"Waterproof Men's Jacket","img/Waterproof jacket For Men.jpeg","A waterproof men’s jacket is designed to keep you dry and comfortable in wet conditions. Crafted from advanced, water-resistant materials, it repels rain while allowing breathability. Many feature adjustable hoods and cuffs for a customized fit. Ideal for outdoor adventures, it combines practicality with modern style.",6000,"Hills"],
    [20,"Waterproof Women's Jacket","img/Waterproof jacket For Women.jpeg","A waterproof women’s jacket is essential for staying dry in wet conditions, combining functionality with style. Made from high-tech, water-resistant fabrics, it repels rain while allowing breathability. Features often include adjustable hoods, cuffs, and hemlines for a custom fit and enhanced protection. Its sleek design makes it versatile for both outdoor adventures and urban settings.",6000,"Hills"],
    [21,"Personal Hygiene Items","img/Personal hygiene items.jpeg","Personal hygiene items are essential for maintaining cleanliness and overall well-being. They include products like toothbrushes, toothpaste, soap, and deodorant, which help manage body odor, oral health, and skin care. Regular use of these items prevents infections and promotes a fresh and healthy appearance. Proper storage and hygiene practices ensure their effectiveness and longevity.",1800,"Hills"],
    [22,"Warm Hat & Gloves","img/Warm hat and gloves.jpeg","Warm hats and gloves are essential winter accessories designed to keep you cozy in cold weather. Made from insulating materials like wool or fleece, they provide protection against chilly winds and freezing temperatures. A snug hat covers your head and ears, while gloves keep your hands warm and functional. Together, they ensure comfort and warmth during outdoor activities in the winter season.",1500,"Hills"],
    [23,"Knife","img/Knife.jpeg","A knife is a versatile tool with a sharp blade used for cutting, slicing, and dicing various materials. It comes in many forms, from kitchen knives designed for food preparation to utility knives for general tasks. The blade's sharpness and handle design are crucial for effective and safe use. Knives are essential in both domestic and professional settings, offering precision and efficiency in their applications.",1000,"Hills"],
    [24,"Multi Tools Pouch","img/Multi Tools.jpeg","A multi-tools pouch is a versatile accessory designed to securely hold and organize various tools and gadgets. Made from durable materials like nylon or leather, it often features multiple pockets and loops for easy access. Ideal for both professionals and hobbyists, it keeps essential tools within reach and prevents clutter. Its compact design ensures portability while maintaining quick accessibility.",2000,"Hills"],
    [25,"Watercraft","img/Watercraft.jpeg","Watercraft are versatile vehicles designed for travel and recreation on water. They range from small personal watercraft like jet skis to larger vessels such as sailboats and motorboats. Engineered for various aquatic environments, they offer thrilling experiences and practical transportation. Whether for leisurely cruises or adventurous sports, watercraft enhance enjoyment on lakes, rivers, and oceans.",5000,"RiverLake"],
    [26,"Fishing Gear","img/Fishing gear.jpeg","Fishing gear encompasses a variety of tools and equipment designed for catching fish. It includes items like rods, reels, lines, hooks, and lures, tailored for different fishing techniques and environments. High-quality gear enhances the fishing experience by improving accuracy and effectiveness. Properly selected and maintained fishing gear can significantly increase the chances of a successful catch.",3000,"RiverLake"],
    [27,"Safety & Protection","img/Safety and protection.jpeg","Safety and protection are essential for ensuring well-being in various environments. They involve implementing measures to guard against accidents, injuries, and potential hazards. This can include using protective gear, adhering to safety protocols, and staying informed about risks. Prioritizing safety helps create secure environments and promotes overall health and security.",5000,"RiverLake"],
    [28,"Navigation & Electronics","img/Navigation and electronics.jpeg","Navigation and electronics encompass a range of technologies that aid in finding and tracking locations. GPS systems provide real-time positioning and route planning, while electronic charts and maps enhance navigation accuracy. These tools are essential for both recreational and professional use, from sailing and driving to aviation. Advanced electronics also offer features like real-time traffic updates and automatic rerouting to improve travel efficiency.",2000,"RiverLake"],
    [29,"Camping & Cooking","img/Camping and cooking.jpeg","Camping and cooking go hand in hand for a satisfying outdoor adventure. Preparing meals over a campfire or portable stove adds to the rustic charm of camping. Essential tools like compact cooking gear and durable utensils make outdoor cooking convenient and enjoyable. Sharing a well-cooked meal under the stars enhances the camaraderie and relaxation of the camping experience.",6000,"RiverLake"],
    [30,"Swimming Accessories","img/Swimming and water sports.jpeg","Swimming accessories enhance comfort and performance in the water. Essential items include goggles for clear vision, swim caps to reduce drag and keep hair dry, and snorkels for easier breathing. Additionally, swim fins and kickboards help improve technique and build strength. These accessories ensure a more enjoyable and effective swimming experience.",5500,"RiverLake"],
    [31,"Men Clothing Accessories","img/Clothing and accessories for men.jpeg","Men’s clothing accessories for river and lake outings often include rugged yet stylish items like wide-brimmed hats for sun protection and polarized sunglasses to reduce glare on the water. Waterproof watches and durable, quick-drying belts are practical for managing water activities and outdoor elements. A versatile, multi-pocket vest can hold essentials, while lightweight, breathable fabrics ensure comfort and mobility during adventures.",7000,"RiverLake"],
    [32,"Women Clothing Accessories","img/Clothing and accessories for women.jpeg","Women’s clothing accessories for river and lake outings often include versatile hats to shield from the sun, waterproof sunglasses to protect eyes from glare, and lightweight scarves that can double as sun covers or insect repellents. Durable, water-resistant bags or totes are essential for carrying essentials and keeping them dry. These accessories combine practicality with style to ensure comfort and protection during outdoor water activities.",7000,"RiverLake"],
    [33,"Maintenance & Repair Kit","img/Maintenance and repair.jpeg","A Maintenance & Repair Kit for river and lake use is essential for keeping watercraft in top condition. It typically includes items like patches, adhesive, and tools to address leaks or damage. Designed for durability and ease of use, it ensures that minor issues can be fixed quickly on-site. This kit helps extend the life of equipment and ensures safe and enjoyable water activities.",4500,"RiverLake"],
    [34,"Camp","img/Camp.jpeg","A camp by the river or lake offers a serene escape into nature, where the soothing sounds of flowing water enhance relaxation. Activities such as fishing, kayaking, and hiking are easily accessible, providing both adventure and tranquility. The natural setting often features scenic views and opportunities for wildlife spotting. This environment fosters a connection to nature, making it a perfect spot for unwinding and rejuvenating.",8000,"RiverLake"],
    [35,"Inflator or CO2 Cartridges","img/Inflator pumps or CO2 cartridges.jpeg","Inflators or CO2 cartridges are essential tools for river and lake activities, providing quick and efficient inflation for inflatable boats and rafts. They are compact and easy to use, allowing users to rapidly inflate their gear with minimal effort. These cartridges are typically designed for portability and reliability, ensuring you’re prepared for sudden needs on the water. Their rapid inflation capability makes them ideal for enhancing safety and convenience during water adventures.",4000,"RiverLake"],
    [36,"Hand Tools Accessories","img/Shelter.jpeg","Hand tools accessories for river and lake activities are designed to enhance functionality and ease during outdoor adventures. These include items like tackle box organizers, multi-tools with built-in features for fishing and camping, and specialized cleaning brushes for gear maintenance. Often made from rust-resistant materials, they ensure durability in wet environments. Compact and easy to carry, these accessories help streamline tasks and improve the overall experience on the water.",5000,"RiverLake"]
]
var beach_products="";
var hill_products="";
var river_lake_products="";
var storedata =[];
for (const iterator of products) {
    if(storedata.includes(iterator[5])){
    // condition first check storedata is empty or not
    }else{
        // MAIN LOGIC
        storedata.push(iterator[5])
    }
    if(iterator[5]== "Beaches"){
        beach_products +=`
    <div id="productcards" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-3 d-flex justify-content-center">
    <div class="card" style="width: 16rem;">
        <img src="${iterator[2]}" class="card-img-top" alt="..." style="hight:200px;">
            <div class="card-body">
            <h6 class="card-title">${iterator[1]}</h6>
              <p class="card-text fw-bold">Rs.${iterator[4]}</p>
            <a href="details.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}" id="hover" class="btn btn-primary rounded-pill">See Detail</a>
            </div>
        </div>
    </div>
`
    }
    if(iterator[5]== "Hills"){
        hill_products +=`<div id="productcards" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-3 d-flex justify-content-center">
    <div class="card" style="width: 16rem;">
        <img src="${iterator[2]}" class="card-img-top" alt="..." style="hight:200px;">
            <div class="card-body">
            <h6 class="card-title">${iterator[1]}</h6>
              <p class="card-text fw-bold">Rs.${iterator[4]}</p>
            <a href="details.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}" id="hover" class="btn btn-primary rounded-pill">See Detail</a>
            </div>
        </div>
    </div>`

    }
    if(iterator[5]== "RiverLake"){
        river_lake_products +=`<div id="productcards" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-3 d-flex justify-content-center">
    <div class="card" style="width: 16rem;">
        <img src="${iterator[2]}" class="card-img-top" alt="..." style="hight:200px;">
            <div class="card-body">
            <h6 class="card-title">${iterator[1]}</h6>
              <p class="card-text fw-bold">Rs.${iterator[4]}</p>
            <a href="details.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}" id="hover" class="btn btn-primary rounded-pill">See Detail</a>
            </div>
        </div>
    </div>`
    }

}
document.getElementById("productListing_b").innerHTML = beach_products
document.getElementById("productListing_h").innerHTML = hill_products
document.getElementById("productListing_rl").innerHTML = river_lake_products





$(document).ready(function(){
    $("#search_input").keyup(function(){
        var searchProduct = "";
        var search  = $("#search_input").val()
        for (const iterator of products) {
             if(search.includes(iterator[1])){
            searchProduct +=`
            <div id="productcards" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-3 d-flex justify-content-center">
                <div class="card" style="width: 16rem;">
                    <img src="${iterator[2]}" class="card-img-top" alt="..." style="hight:200px;">
                        <div class="card-body">
                        <h6 class="card-title">${iterator[1]}</h6>
                          <p class="card-text fw-bold">Rs.${iterator[4]}</p>
                        <a href="details.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}" id="hover" class="btn btn-primary rounded-pill">See Detail</a>
                        </div>
                    </div>
                </div>
            `
            }else{

            }
        }

        if(searchProduct == ""){
            for (const iterator of products) {
               searchProduct +=`
               <div id="productcards" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-3 d-flex justify-content-center">
                   <div class="card" style="width: 16rem;">
                       <img src="${iterator[2]}" class="card-img-top" alt="..." style="hight:200px;">
                           <div class="card-body">
                           <h6 class="card-title">${iterator[1]}</h6>
                             <p class="card-text fw-bold">Rs.${iterator[4]}</p>
                           <a href="details.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}" id="hover" class="btn btn-primary rounded-pill">See Detail</a>
                           </div>
                       </div>
                   </div>
               `
            }
            $("#productListing_b").html(searchProduct)
        }else{
            $("#productListing_b").html(searchProduct)
        }

    })
  })
