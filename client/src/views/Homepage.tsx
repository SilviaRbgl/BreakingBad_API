import React from "react";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <div className="box">
        <h1>Welcome to the breakingbad.API</h1>
      </div>
      <div className="container">
        <h2>introduction</h2>
        <p>
          Welcome to the breakingbad.API! This documentation should help
          familiarise yourself with the resources available and how to consume
          them with HTTP requests.
        </p>
        <p>What is a REST API?</p>
        <p>
          An API is an application programming interface - in short, it’s a set
          of rules and instructions that lets programs talk to each other,
          exposing data and functionality across the internet in a consistent
          format.
        </p>
        <p>
          REST stands for Representational State Transfer. This is an
          architectural pattern that describes how distributed systems can
          expose a consistent interface. When people use the term ‘REST API,’
          they are generally referring to an API accessed via HTTP protocol at a
          predefined set of URLs.
        </p>
        <p>
          These URLs represent various resources - any information or content
          accessed at that location, which can be returned as JSON, HTML, audio
          files, or images. Often, resources have one or more methods that can
          be performed on them over HTTP, like GET, POST, PUT and DELETE.
        </p>
        <p>The breakingbad.API only allows you to GET data.</p>
      </div>
      <div className="container">
        <h2>characters</h2>
        <p>
          In this request you will find a list of the characters of the serie
          Breaking Bad. Characters objects can have the following properties:
        </p>
        <ul>
          <li>
            <p>char_id: the general id of the character (Number)</p>
          </li>
          <li>
            <p>name: the name of the character (String)</p>
          </li>
          <li>
            <p>birthday: the date of the birthday of the character (String)</p>
          </li>
          <li>
            <p>occupation: the ocupation of the character (Array)</p>
          </li>
          <li>
            <p>img: an image of the character (String)</p>
          </li>
          <li>
            <p>status: the current life status of the character (String)</p>
          </li>
          <li>
            <p>nickname: the nickname of the character (String)</p>
          </li>
          <li>
            <p>
              appearance: the seasons in which the character appears (Array)
            </p>
          </li>
          <li>
            <p>
              portrayed: the name of the actor/actress of the character (String)
            </p>
          </li>
          <li>
            <p>category: the name of the serie (String)</p>
          </li>
          <li>
            {" "}
            <p>
              better_call_saul_appearance: the appearence in "Better Call Saul"
              (Array)
            </p>
          </li>
        </ul>
      </div>

      <div className="container">
        <h2>endpoints</h2>
        <h3>/api/all</h3>
        <p>
          The "/all" endpoint allows you to fetch the complete list of the
          characters.
        </p>
        {/* REVIEW he añadido el atributo target="_blank", para que el link se abra en otra pestaña. y por seguridad , al hacer eso, se recomienda añadir el atributo rel="noreferrer" */}
        <a href="https://breaking-bad-api-blue.vercel.app/api/characters/all" rel="noreferrer" target="_blank">https://breaking-bad-api-blue.vercel.app/api/characters/all</a>
        <h3>/api/byid</h3>
        <p>
          The "/byid" endpoint allows you to fetch a specific character by ID.
        </p>
        <a href="https://breaking-bad-api-blue.vercel.app/api/characters/all/byid" rel="noreferrer" target="_blank">https://breaking-bad-api-blue.vercel.app/api/characters/all/byid</a>
        {/* REVIEW lo que estas usando no es un query param, sino un URL param. un Query param seria si tuvieses que insertar una key en la url, precedido de "?", en este caso seria algo como /?id=1 */}
        <p>
          You will be able to select which ID with the query param "char_id" like
          follow:
        </p>
        <a href="https://breaking-bad-api-blue.vercel.app/api/characters/all/1" rel="noreferrer" target="_blank">https://breaking-bad-api-blue.vercel.app/api/characters/all/1</a>

      </div>
      <Footer />
    </>
  );
}

export default Homepage;
