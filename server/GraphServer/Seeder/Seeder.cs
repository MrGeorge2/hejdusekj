namespace GraphServer.Seeder
{
    public class Seeder : ISeeder
    {
        private readonly IReadOnlyList<ISeeder> _seeders;

        public Seeder(ILocalizationSeeder localizationSeeder)
        {
            // Register all seeders here.
            _seeders = new List<ISeeder>()
            {
                localizationSeeder
            };
        }

        /// <summary>
        /// Seed the database.
        /// </summary>
        /// <returns></returns>
        public async Task SeedAsync()
        {
            var tasks = new List<Task>();

            foreach (var seeder in _seeders)
            {
                tasks.Add(seeder.SeedAsync());
            }

            await Task.WhenAll(tasks.ToArray());
        }
    }
}