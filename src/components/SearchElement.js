import React, { useState } from "react";
import {
  Search,
  Grid,
  Header,
  Segment,
  Label,
  Button,
  Form,
} from "semantic-ui-react";
import _ from "lodash";

function SearchElement(props) {
  let data = props.data;
  console.log("PROPS", props);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");

  const handleSearchChange = (x) => {
    setValue(x.target.value);
    console.log("VVV", value);
  };

  const Show = () => {
    if (props.label === "State") {
      var temp = data.filter((e) => e.state === value);
      setResults(temp);
    } else if (props.label === "District") {
      var temp1 = data.filter((e) => e.district_name === value);
      setResults(temp1);
    }
    console.log("RRRR", results);
  };

  return (
    // <Grid.Column style={{ flex: 1 }}>
    <div style={{ flex: 1, flexDirection: "row" }}>
      <h2>{props.label} : </h2>
      <Search
        loading={loading}
        onSearchChange={handleSearchChange}
        results={results}
        value={value}
      />
      {/* <Button onClick={Show}>Search</Button> */}
    </div>
    //        <Form>
    //         <Form.Field>
    //           <label>{props.label}</label>
    //           <input
    //             value={value}
    //             placeholder={`Search by ${props.label} name`}
    //             onChange={(e) => {
    //               setValue(e.target.value);
    //               console.log(value);
    //             }}
    //           />
    //         </Form.Field>
    //       </Form>
    //  <Button type="submit" onClick={Show}>
    //         Submit
    //       </Button>
    //     </Grid.Column>
  );
}

export default SearchElement;

// import _ from "lodash";
// // import faker from "faker";
// import React from "react";
// import { Search, Grid, Header, Segment } from "semantic-ui-react";

// function SearchElement(props) {
//   const source = props.data ? props.data.slice() : [];
//   const type = props.keyword;
//   const label = props.label;
//   const initialState = {
//     loading: false,
//     results: [],
//     value: "",
//   };

//   function exampleReducer(state, action) {
//     switch (action.type) {
//       case "CLEAN_QUERY":
//         return initialState;
//       case "START_SEARCH":
//         return { ...state, loading: true, value: action.query };
//       case "FINISH_SEARCH":
//         // console.log("RESS",action.results)
//         return { ...state, loading: false, results: action.results };
//       case "UPDATE_SELECTION":
//         return { ...state, value: action.selection };

//       default:
//         throw new Error();
//     }
//   }

//   const [state, dispatch] = React.useReducer(exampleReducer, initialState);
//   const { loading, results, value } = state;

//   const timeoutRef = React.useRef();
//   const handleSearchChange = React.useCallback((e, data) => {
//     clearTimeout(timeoutRef.current);
//     dispatch({ type: "START_SEARCH", query: data.value });

//     timeoutRef.current = setTimeout(() => {
//       if (data.value.length === 0) {
//         dispatch({ type: "CLEAN_QUERY" });
//         return;
//       }

//       const re = new RegExp(_.escapeRegExp(data.value), "i");
//       const isMatch = (result) => re.test(result.state);

//       if (source.length)
//         dispatch({
//           type: "FINISH_SEARCH",
//           results: _.filter(source, isMatch),
//         });
//     }, 300);
//   }, []);
//   React.useEffect(() => {
//     return () => {
//       clearTimeout(timeoutRef.current);
//     };
//   }, []);

//   return (
//     <Grid>
//       <Grid.Column width={6}>
//         <h2>{props.label} : </h2>
//         <Search
//           loading={loading}
//           onResultSelect={(e, data) =>
//             dispatch({ type: "UPDATE_SELECTION", selection: data.result.state })
//           }
//           onSearchChange={handleSearchChange}
//           results={results}
//           value={value}
//         />
//       </Grid.Column>

//       <Grid.Column width={10}>
//         <Segment>
//           <Header>State</Header>
//           <pre style={{ overflowX: "auto" }}>
//             {JSON.stringify({ loading, results, value }, null, 2)}
//           </pre>
//           <Header>Options</Header>
//           <pre style={{ overflowX: "auto" }}>
//             {JSON.stringify(source, null, 2)}
//           </pre>
//         </Segment>
//       </Grid.Column>
//     </Grid>
//   );
// }

// export default SearchElement;
