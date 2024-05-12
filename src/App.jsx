import React from 'react'
import Card from './Card'
function App() {
  let data = [
    {
      title:"Heavens Gate China",
      description:"Tianmen Mountain (simplified Chinese: 天门山; traditional Chinese: 天門山; pinyin: Tiānmén Shān; lit. 'Heaven's Gate Mountain') is a mountain located within Tianmen Mountain National Park, Zhangjiajie, in the northwestern part of Hunan Province, China.",
      imageUrl:"https://www.travelandleisure.com/thmb/uHmJJ2iSWw9uelHUBuqsr_53CGY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gate-of-heaven-tianmen-mountain-china-HEAVENGATE1117-0866515910984beaa8d00ff8609189b3.jpg"
    },
    {
      title:"Underwaterfall",
      description:"About 2000 miles off the eastern coast of Africa lies a chain of islands, with the largest of them known as Mauritius, inhabited by over 1.2 million people. Formed by a volcanic hot spot in the Indian Ocean, Mauritius is home to its own unique flora and fauna, an enormous series of coral reefs, and a spectacular sight: an underwater waterfall. Although you might think the notion of an “underwater waterfall” is impossible, there’s a compelling physical explanation behind this stunning phenomenon",
      imageUrl:"https://bigthink.com/wp-content/uploads/2022/02/1_8nBTmy5qQlhq-YhYsB4wzw.jpg?lb=800,450"
    },
    {
      title:"Reverse Waterfall",
      description:"Naneghat Reverse Waterfall depicts water flowing upward rather than downward from a fall between two mountains. The wonders of Mother Nature are effortlessly captivating. Naneghat Reverse Waterfall: Water always flows downward, as even a little kid is well aware of. So how can a waterfall ascend",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlB1NkBj7_LDO-nOg8RP0F2AcdcS9bAN22qTrm9KhUQPTzVJUiCqubMItw67BSfHWbAvk&usqp=CAU"
    },
    {
      title:"Magnetic Hill",
      description:"Magnet Hill is a gravity hill located, near Leh in Leh district of Ladakh, India. The layout of the area and surrounding slopes create the optical illusion of a hill. The hill road is actually a downhill road.",
      imageUrl:"https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT6YHu3Pn7Cboq_on-lk9lNZVHlVE_u9q3MDv8eOYSO6gNVHZIXzkbsAZltDlKXW_ftHfBtblGq0qoRdULf6l9TMDD__-1vT7g3t0BduA"
    }
  ]
  return <>
    <div className="container">
      <h1 className="my-4">Reusable Components</h1>
      <div className="row">
        {
          data.map((e,i)=>{
            // return <Card data = {e}/>
            return <Card 
            imageUrl = {e.imageUrl}
            description = {e.description}
            title = {e.title}
            key={i}
            />
          })
        }
      </div>
    </div>
  </>
}
export default App
// function Card (props){
//   console.log(props)
//   return <div className="col-lg-4 col-sm-6 mb-4">
//   <div className="card h-100">
//     <a href="#"><img className="card-img-top" src={props.data.imageUrl} alt={props.data.title} height={"200px"} width={"200px"}/></a>
//     <div className="card-body">
//       <h4 className="card-title">
//         <a href="#">{props.data.title}</a>
//       </h4>
//       <p className="card-text">{props.data.description}</p>
//     </div>
//   </div>
// </div>
// }

