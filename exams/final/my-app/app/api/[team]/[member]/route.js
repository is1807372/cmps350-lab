import * as Member from "@/repos/member";
import prisma from "@/repos/prisma";


export async function add(data) {
    return await prisma.member.create({
      data,
    });
  }


  export async function update(id, data) {
    return await prisma.member.update({
      where: { id },
      data,
    });
  }
  
  export async function remove(id) {
    return await prisma.member.delete({
      where: { id },
    });
  }
  
  export async function patch(id, data) {
    return await prisma.member.update({
      where: { id },
      data,
    });
  }

  
export async function get(teamId) {
    return await prisma.member.findMany({
      where: {
        team: teamId,
      },
    });
  }




























// member component
export default function member({ member, callback }) {
    // Function to handle toggling member completion status
    async function handleToggle(event) {
      // Prevent default form submission behavior
      event.preventDefault();
      // Toggle the completed status of the member
      const response = await fetch(`/api/${member.team}/${member.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          completed: !member.completed,
        }),
      });
  
      // If the request is successful, refresh the member data
      if (response.ok) {
        callback();
      }
    }
  
    // Render member title and action buttons
    return (
      <div className="flex justify-between">
        {/* Display member title */}
        <h2>{member.title}</h2>
        <div>
          {/* Button to toggle member completion status */}
          <button title="Toggle" onClick={handleToggle}>
            {/* Render different icon based on member completion status */}
            {member.completed ? <SquareCheckBig /> : <Square />}
          </button>
          {/* Button to delete member */}
          <button title="Delete">
            <SquareX /> {/* Icon for delete action */}
          </button>
        </div>
      </div>
    );
  }
  











