import React, { useState } from 'react'
import Letter from './Letter'
import { convertToNumber, numberInTrinaryObject } from './utils'

function About ({ closeAbout }) {
  const [string, setString] = useState(" ")
  const colors = ["FFFFFF", "#808080", "#000000"]

  const trinaryAsNumber = (trinaryObject) => {
    return `${trinaryObject[9]}${trinaryObject[3]}${trinaryObject[1]}`
  }

  return (
    <div className="About">
      <p>I made this one weekend while trying to come up with abstract-looking artwork that could hold secret meaning. Maybe one day I’ll write a message and use this to design a massive tapestry to hang on our wall, and you’ll be in on it.</p>
      <p>Here’s how it works:</p>
      <input type="text" name="string" onChange={(e) => setString(e.target.value)} placeholder="type any letter here" maxLength="1"/>
      <p>Each letter you enter is converted to a number: A = 1, B = 2, C = 3, all the way down to Z = 26. So your letter becomes:</p>
      <p>{convertToNumber(string, true)}</p>
      <p>That number is then converted into it’s base 3 representation. What does that mean? You and I are used to a base 10 number system: it starts at zero, walks all the way up to nine—and then you put a one in a new column (the “tens place”) to say that there’s one ten here, plus whatever other number is in the “ones place”, where you start all over at zero.</p>
      <p>A base 3 system is the same, except with threes! It starts at zero, walks up to two—and then you put a one in a new column (the “threes place”) to say that there’s one three here, plus whatever other number is in the “ones place”, where you start all over at zero. Just like ten tens make one hundred and you have to start a new column, three threes make a nine and you start a new column, too.</p>
      <p>So your letter-turned-number becomes:</p>
      <p>{trinaryAsNumber(numberInTrinaryObject(convertToNumber(string)))}</p>
      <p>or:</p>
      <table>
        <tr>
          <th>9s</th>
          <th>3s</th>
          <th>1s</th>
        </tr>
        <tr>
          <td>{numberInTrinaryObject(convertToNumber(string))[9]}</td>
          <td>{numberInTrinaryObject(convertToNumber(string))[3]}</td>
          <td>{numberInTrinaryObject(convertToNumber(string))[1]}</td>
        </tr>
      </table>
      <p>Each of those digits is represented by a square with a different filling determined by it’s value: white = 0; gray = 1; black = 2.</p>
      <p>Your letter (outlined for visibility) looks like:</p>
      { string &&
        <div className="aboutDisplay">
          <Letter id="0" letter={string} colors={colors} />
        </div>
      }
      { !string &&
        <div className="aboutDisplay">
          <Letter id="0" letter={" "} colors={colors} />
        </div>
      }
      <p>And then we just add the same thing in reverse to get that nice symmetry:</p>
      { string &&
        <div className="aboutDisplay diagramRow">
          <Letter key="1" id="1" letter={string} colors={colors} />
          <Letter key="1-reverse" id="1-reverse" letter={string} colors={colors} reverse={true}/>
        </div>
      }
      { !string &&
        <div className="aboutDisplay diagramRow">
          <Letter key="1" id="1" letter={" "} colors={colors} />
          <Letter key="1-reverse" id="1-reverse" letter={" "} colors={colors} reverse={true}/>
        </div>
      }
      <p>Great job!</p>
      <p>Now go back and type all sorts of words and sentences and see what shapes they make.</p>
      <p>(Some of my favorites so far are: “december”, “twelve”, “twenty”, “fourteen”, “notion”, and of course “livvy”.)</p>
      <p>Conceptualized, designed, and built by Livvy. Typeface by Ivan. A project of <a href="https://ruiz-knott.com" className="clickable">Ruiz & Knott.</a></p>
      <p>P.S. If you like this, you might like <a className="clickable" href="https://ruiz-knott.notion.site/obscured_data-aae285e2f7524780a4c92ec40eb1b6e8" target="_blank" rel="noopener noreferrer">@obscured_data.</a></p>
    </div>
  )
}

export default About;
