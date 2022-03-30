import React from "react";

const CourseForm = () => {
  return (
    <div>
      <form>
        <label>
          Course Number
          <input type="text" name="courseNum" />
        </label>
        <label>
          Course Link
          <input type="text" name="courseLink" />
        </label>
        <label>
          Hubspot Ticket
          <input type="text" name="hubspotTicket" />
        </label>
        <label>
          Rocket Chat
          <input type="text" name="rocketChat" />
        </label>
        <label>
          Instructor
          <input type="text" name="instructor" />
        </label>
        <label>
          Teacher Assistant
          <input type="text" name="teacherAssistant" />
        </label>
        <label>
          Location
          <select>
            <option value="acaStEdwards">ACA - St. Edwards</option>
            <option value="lca">LCA</option>
            <option value="acaOnlineNorth">ACA - Online-North</option>
            <option value="ttcu">TTCU</option>
            <option value="ttcuMarbleFalls">TTCU - Marble Falls</option>
          </select>
        </label>
        <label>
          Days
          <select>
            <option value="partTimeMonWed">Mon/Wed</option>
            <option value="partTimeTuesThurs">Tues/Thurs</option>
            <option value="fullTime">Full Time</option>
          </select>
        </label>
        <label>
          Mode
          <select>
            <option value="online">Online</option>
            <option value="inPerson">In-Person</option>
          </select>
        </label>
        {/* still needs: */}
        {/* start date, end date, # students start, # students end, active toggle, save button */}
        {/* calendar input for dates */}
      </form>
    </div>
  );
};

export default CourseForm;