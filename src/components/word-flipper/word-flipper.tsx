import * as React from "react"
import "./word-flipper.scss";


interface ITestProps {
}
interface ITestState {
    fromLetters: Array<string>;
    toLetters: Array<string>,
    words: Array<string>,
    isTransitioning:boolean,
}

class WordFlipper extends React.Component<ITestProps, ITestState> {
    wordChangeInterval: any;
    constructor(props: ITestProps) {
      super(props);
      const words =  ["things\u00a0for\u00a0web", "scaleable\u00a0things", "things\u00a0to\u00a0last", "reliable\u00a0things", "secure\u00a0things"];
      this.state = {
        fromLetters: [],
        toLetters: words[0].split(''),
        words:  [...words.slice(1,words.length), words[0]],
        isTransitioning: true,
      };
    }
  
    componentDidMount() {
        this.wordChangeInterval = setInterval(() => {
            this.setState({
                fromLetters: this.state.toLetters,
                toLetters: this.state.words[0].split(''),
                words: [...this.state.words.slice(1,this.state.words.length), this.state.words[0]],
                isTransitioning: false
            });
            setTimeout(() => {
                this.setState({
                    isTransitioning: true
                });
             }, 50);
        }, 5000);
            
    }
  
    componentWillUnmount() {
        clearInterval(this.wordChangeInterval);
    }
  
    render() {
      return (
          <div className='word-flipper'>
            <div className="text">
                <p className={this.state.isTransitioning ? "on" : ""}>
                    <span className="word from">
                        {this.state.fromLetters.map((letter, i) => (
                            <span className="letter from-letter" key={"fromLetter"+i}>{String(letter)}</span>
                        ))}
                    </span>
                    <span className="word to">
                        {this.state.toLetters.map((letter, i) => (
                            <span className="letter to-letter" key={"toLetter"+i}>{String(letter)}</span>
                        ))}
                    </span>
                </p>
            </div>
        </div>
      );
    }
  }

export default WordFlipper
