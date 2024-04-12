import React from 'react'
import { Link } from 'react-router-dom'

function Test() {
  return (
    <>
        <div className="bg-gray-100 min-h-screen">
      <header className="bg-white py-4 px-8 flex justify-between items-center shadow">
        <div className="flex items-center space-x-4">
          {/* <Avatar>
            <AvatarImage alt="PaceDream Logo" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>PD</AvatarFallback>
          </Avatar> */}
          <span className="text-lg font-semibold">PaceDream</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>USD</span>
          {/* <Avatar>
            <AvatarImage alt="User Avatar" src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <Button variant="outline">List your property</Button>
          <ShoppingCartIcon className="text-gray-600" />
          <BellRingIcon className="text-gray-600" /> */}
        </div>
      </header>
      <main className="py-8 px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-4">Create a Listing</h1>
          <section>
            <h2 className="font-semibold mb-2">Select Category</h2>
            <div className="flex space-x-2 mb-6">
              {/* <Badge variant="secondary">Room Stays</Badge>
              <Badge variant="secondary">Time-Based</Badge>
              <Badge variant="secondary">Hourly Rental Gear</Badge>
              <Badge variant="secondary">Find Roommate</Badge>
              <Badge variant="secondary">Experiences</Badge> */}
            </div>
            <h2 className="font-semibold mb-2">Room Type</h2>
            <div className="flex space-x-2 mb-6">
              {/* <Badge variant="secondary">Anytime</Badge>
              <Badge variant="secondary">Any type</Badge>
              <Badge variant="secondary">Hostel</Badge>
              <Badge>Guesthouse</Badge>
              <Badge variant="secondary">Long term</Badge>
              <Badge variant="secondary">Short Term</Badge> */}
            </div>
            <h2 className="font-semibold mb-2">Add Location</h2>
            {/* <Input className="mb-6" placeholder="Type your locations" /> */}
            <h2 className="font-semibold mb-2">Description</h2>
            {/* <Input className="mb-6" placeholder="Description of the space" /> */}
            <h2 className="font-semibold mb-2">Available Amenities</h2>
            <div className="flex space-x-2 mb-6">
              {/* <Badge variant="secondary">Wi-Fi Access</Badge>
              <Badge variant="secondary">Air Conditioning</Badge>
              <Badge variant="secondary">Free Parking</Badge>
              <Badge variant="secondary">Swimming Pool</Badge>
              <Badge variant="secondary">Gym/Fitness Center</Badge> */}
            </div>
            <h2 className="font-semibold mb-2">Price Per Night</h2>
            {/* <Input className="mb-6" placeholder="$150.00" /> */}
            <h2 className="font-semibold mb-2">Availability Dates</h2>
            {/* <Calendar className="rounded-md border mb-6" mode="single" /> */}
            <h2 className="font-semibold mb-2">House Rules:</h2>
            <ol className="list-decimal pl-4 mb-6">
              <li>
                No Smoking: Smoking is strictly prohibited inside the house. Designate specific outdoor areas for
                smoking if necessary.
              </li>
              <li>
                Quiet Hours: Respect quiet hours to ensure a peaceful environment, typically from [Insert specific time]
                to [Insert specific time].
              </li>
              <li>
                Guest Policy: Notify the host in advance if you plan to have guests, and limit the number of guests
                allowed. No overnight guests without prior approval.
              </li>
              <li>No Pets: Unless explicitly allowed, pets are not permitted on the premises.</li>
            </ol>
            <h2 className="font-semibold mb-2">Upload a file:</h2>
            <div className="flex items-center space-x-2 mb-6">
              {/* <Button variant="outline">Select a file or drag and drop</Button>
              <Button variant="secondary">Upload</Button> */}
            </div>
            <div className="flex space-x-2">
              <img
                alt="Room Image"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "150/100",
                  objectFit: "cover",
                }}
                width="150"
              />
              <img
                alt="Room Image"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "150/100",
                  objectFit: "cover",
                }}
                width="150"
              />
              <img
                alt="Room Image"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "150/100",
                  objectFit: "cover",
                }}
                width="150"
              />
            </div>
          </section>
          <div className="flex justify-between mt-8">
            {/* <Button variant="outline">Cancel</Button> */}
            {/* <Button>Create Listing</Button> */}
          </div>
        </div>
      </main>
      <footer className="bg-white py-4 px-8 mt-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <span>© 2023 PaceDream. All Rights Reserved.</span>
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#">Support</Link>
            <Link href="#">Help Center</Link>
            <Link href="#">Press</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#">Contact</Link>
            <Link href="#">About Us</Link>
            {/* <AppleIcon className="text-gray-600" /> */}
            {/* <StoreIcon className="text-gray-600" /> */}
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Test