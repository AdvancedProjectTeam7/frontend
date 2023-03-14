// import * as React from "react";
// import LinearProgress, {LinearProgressProps,} from "@mui/material/LinearProgress";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import {AiOutlineEdit} from "react-icons/ai"
// import "./profit.css";

// function LinearProgressWithLabel(
//   props: LinearProgressProps & { value: number }
// ) {
//   return (
//     <>
//   <div className="title-icon">
//     <div className="profit-title">profit goals</div>
//     <div className="input-profit">
//       <input type="text"/>
//     </div>
//     <AiOutlineEdit className="profit-edit-icon"/>
//     </div>
//     <Box
//     className="MuiBox-root-css-gmuwbf"
//     >
//       <Box sx={{ width: "50%", mr: 1, backgroundColor:"green" }}>
//         <LinearProgress variant="determinate" {...props} />
//       </Box>
//       <Box sx={{ minWidth: 35 }}>
//         <Typography variant="body2" color="text.secondary">{`${Math.round(
//           props.value
//         )}%`}</Typography>
//       </Box>
//     </Box>
//     </>
//   );
// }

// export default function LinearWithValueLabel() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) =>
//         prevProgress >= 100 ? 10 : prevProgress + 10
//       );
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <Box sx={{ width: "100%" }}>
//       <LinearProgressWithLabel value={progress} />
//     </Box>
//   );
// }
