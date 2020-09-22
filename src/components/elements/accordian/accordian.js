import React, { useEffect } from 'react';
import PropTypes from "prop-types";

import './accordian.style.scss'

const Accordian = ({questions}) => {
  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }, []) 

  return (
    <div className="text-white">
      {questions && questions.map((question, i) => (
        <div key={i}>
          <button className="accordion bg-primary mb-2">{question.title}</button>
          <div className="panel bg-primary-dark text-left p-4 md:p-8 mb-2">
            <div>{question.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}


Accordian.propTypes = {
  loaded: PropTypes.bool,
  questions: PropTypes.array
};

export default Accordian;