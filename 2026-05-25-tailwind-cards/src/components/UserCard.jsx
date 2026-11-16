// карточка: на телефоне всё в колонку (картинка сверху), на ПК картинка слева
function UserCard({ user }) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={user.photo} alt={user.name} className="w-full h-56 md:w-48 md:h-auto object-cover" />

      <div className="flex flex-col justify-between p-6 gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-sm text-indigo-500 font-medium">{user.role}</p>
          <p className="mt-3 text-gray-600">{user.description}</p>
        </div>

        <button className="self-start px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 active:scale-95 transition">
          Написать
        </button>
      </div>
    </div>
  )
}

export default UserCard
