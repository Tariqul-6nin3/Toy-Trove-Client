/* eslint-disable no-unused-vars */

const Blogs = () => {
  return (
    <div className="z-0 py-12">
      <div className="text-center">
        <h3 className="text-4xl text-black font-serif mb-7 font-bold">
          Question And Answering
        </h3>
      </div>
      <div className="max-w-7xl mx-auto space-y-5">
        <div
          tabIndex={0}
          className="collapse collapse-plus border hover:bg-[#e5e7eb] bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
            <h3>
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h3>
          </div>
          <div className="collapse-content">
            <p tabIndex={0} className="px-8">
              <strong className="text-2xl font-bold italic font-mono">
                Access Token:
              </strong>
              <br />
              An access token is a credential that is issued by an
              authentication server to a client after a successful
              authentication process. It is a string of characters that
              represents the authorization granted to the client to access
              protected resources or perform specific actions on behalf of the
              authenticated user. The access token typically has an expiration
              time, after which it becomes invalid and needs to be refreshed or
              reacquired. The client includes the access token in each request
              to the server to authenticate and authorize its actions.
              <br />
              <br />
              <strong className="text-2xl font-bold italic font-mono">
                Refresh Token:
              </strong>
              <br />
              A refresh token is a long-lived credential that is also issued by
              the authentication server during the authentication process.
              Unlike the access token, the refresh token is not sent with each
              request to the server. Its purpose is to obtain a new access token
              when the current access token expires. The client securely stores
              the refresh token and uses it to request a new access token from
              the authentication server without requiring the user to
              re-authenticate. The refresh token has a longer expiration time
              compared to the access token.
              <br />
              <br />
              <strong className="text-2xl font-bold italic font-mono">
                Storage on the Client-side:
              </strong>
              <br />
              Access tokens and refresh tokens should be securely stored on the
              client-side to prevent unauthorized access. It is recommended to
              store the tokens in a secure storage mechanism such as browser
              cookies with appropriate security flags (e.g., HttpOnly, Secure)
              or browser storage APIs like sessionStorage or localStorage.
              Storing tokens in secure storage mechanisms helps protect them
              from cross-site scripting (XSS) attacks and ensures they are not
              accessible to malicious scripts or third-party JavaScript code.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border hover:bg-[#e5e7eb] bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
            <h3>Compare SQL and NoSQL databases?</h3>
          </div>
          <div className="collapse-content">
            <p tabIndex={0} className="px-8">
              <strong className="text-2xl font-bold italic font-mono">
                Compare SQL and NoSQL databases:
              </strong>
              <br />
              SQL (Structured Query Language) and NoSQL (Not Only SQL) databases
              are two different types of database management systems, each with
              its own characteristics and use cases.
              <br />
              <br />
              <strong className="text-2xl font-bold italic font-mono">
                SQL Databases:
              </strong>
              <br />
              SQL databases are relational databases that organize data into
              tables with rows and columns. They follow a predefined schema and
              enforce strong data consistency and integrity. SQL databases use
              structured query language (SQL) for defining and manipulating the
              data.
              <br />
              Some key characteristics of SQL databases include:
              <br />
              <br />
              <ul className="list-disc list-inside mt-2 ml-6">
                <li>Structured data model with fixed schema</li>
                <li>Strong data consistency</li>
                <li>
                  Support for ACID (Atomicity, Consistency, Isolation,
                  Durability) transactions
                </li>
                <li>Relationships and joins between tables</li>
                <li>Well-suited for complex queries and aggregations</li>
                <li>Vertical scalability (scaling up hardware resources)</li>
              </ul>
              <br />
              <strong className="text-2xl font-bold italic font-mono">
                NoSQL Databases:
              </strong>
              <br />
              NoSQL databases are non-relational databases that provide a
              flexible and scalable approach for managing data. They can handle
              large volumes of unstructured or semi-structured data and offer
              high performance and scalability.
              <br />
              Some key characteristics of NoSQL databases include:
              <br />
              <br />
              <ul className="list-disc list-inside mt-2 ml-6">
                <li>Schema-less or flexible data model</li>
                <li>Eventual data consistency</li>
                <li>
                  Horizontal scalability (scaling out by adding more servers)
                </li>
                <li>Support for distributed architectures</li>
                <li>High availability and fault tolerance</li>
                <li>Optimized for read and write-heavy workloads</li>
              </ul>
              <br />
              SQL and NoSQL databases have different strengths and are suitable
              for different use cases. SQL databases are often used for
              applications that require complex queries, data consistency, and
              strict adherence to a predefined schema. NoSQL databases are
              popular for handling large-scale data, high traffic loads, and
              scenarios where flexible schema and scalability are important.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border hover:bg-[#e5e7eb] bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
            <h3>What is express js? What is Nest JS ?</h3>
          </div>
          <div className="collapse-content">
            <p tabIndex={0} className="px-8">
              <strong className="text-2xl font-bold italic font-mono">
                Express.js:
              </strong>
              <br />
              Express.js is a popular web application framework for Node.js. It
              provides a simple and flexible way to build web applications and
              APIs by extending the capabilities of Node.js. Express.js follows
              the minimalist philosophy and offers a lightweight, unopinionated
              approach, allowing developers to have more control over their
              applications structure and design choices.
              <br />
              <br />
              Some key features and characteristics of Express.js include:
              <br />
              <br />
              <ul className="list-disc list-inside mt-2 ml-6">
                <li>Minimal and unopinionated framework</li>
                <li>Extensible middleware architecture</li>
                <li>
                  Routing system for defining routes and handling HTTP requests
                </li>
                <li>Support for template engines to generate dynamic HTML</li>
                <li>
                  Integration with various third-party libraries and frameworks
                </li>
                <li>Wide community support and extensive ecosystem</li>
              </ul>
              <br />
              Express.js is commonly used for building web servers, RESTful
              APIs, and single-page applications. It provides a flexible
              foundation for developing server-side applications using
              JavaScript and Node.js.
              <br />
              <br />
              <strong className="text-2xl font-bold italic font-mono">
                Nest.js:
              </strong>
              <br />
              Nest.js is a progressive and opinionated web application framework
              for Node.js, inspired by Angular. It combines elements of
              object-oriented programming, functional programming, and
              functional reactive programming to provide a robust and scalable
              architecture for building server-side applications. Nest.js uses
              TypeScript as its primary language and leverages decorators and
              metadata to define modules, controllers, and services.
              <br />
              <br />
              Some key features and characteristics of Nest.js include:
              <br />
              <br />
              <ul className="list-disc list-inside mt-2 ml-6">
                <li>Modular and scalable architecture</li>
                <li>Strongly-typed with TypeScript</li>
                <li>Dependency injection and inversion of control</li>
                <li>
                  Decorators for defining modules, controllers, and services
                </li>
                <li>
                  Middleware and interceptors for request/response processing
                </li>
                <li>Support for GraphQL, WebSockets, and microservices</li>
              </ul>
              <br />
              Nest.js focuses on developer productivity, maintainability, and
              scalability. It provides a structured and organized approach for
              building enterprise-grade applications while leveraging the
              benefits of TypeScript and the Node.js ecosystem.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border hover:bg-[#e5e7eb] bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
            <h3>What is MongoDB aggregate and how does it work?</h3>
          </div>
          <div className="collapse-content">
            <p tabIndex={0} className="px-8">
              <strong className="text-2xl font-bold italic font-mono">
                MongoDB Aggregation:
              </strong>
              <br />
              MongoDB Aggregation is a powerful framework for performing
              advanced data processing and analysis tasks on MongoDB
              collections. It allows you to extract insights and manipulate data
              using a flexible and expressive pipeline-based approach. The
              aggregation framework provides a set of operators and stages that
              enable you to perform complex queries, transformations, and
              aggregations on your data.
              <br />
              <br />
              The aggregation pipeline in MongoDB consists of multiple stages
              that are applied sequentially to the documents in a collection.
              Each stage performs a specific operation on the input documents
              and passes the results to the next stage. This allows you to
              compose a series of operations to achieve the desired data
              processing and aggregation tasks.
              <br />
              <br />
              Some key features and concepts of MongoDB Aggregation include:
              <br />
              <br />
              <ul className="list-disc list-inside mt-2 ml-6">
                <li>
                  Aggregation stages such as $match, $group, $project, $sort,
                  $limit, etc.
                </li>
                <li>
                  Pipeline operators for data manipulation and transformation
                </li>
                <li>
                  Aggregation expressions for performing calculations and
                  comparisons
                </li>
                <li>
                  Support for joins, unions, and lookups with multiple
                  collections
                </li>
                <li>
                  Conditional branching and control flow with $cond and $switch
                </li>
                <li>GeoSpatial and text search capabilities</li>
              </ul>
              <br />
              The MongoDB Aggregation framework is highly flexible and can
              handle a wide range of data processing tasks. It is particularly
              useful for performing complex aggregations, generating reports,
              and deriving meaningful insights from large datasets.
              <br />
              <br />
              By utilizing the power of the aggregation framework, you can
              efficiently query and analyze your MongoDB data, making it a
              valuable tool for data analysis and business intelligence
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
