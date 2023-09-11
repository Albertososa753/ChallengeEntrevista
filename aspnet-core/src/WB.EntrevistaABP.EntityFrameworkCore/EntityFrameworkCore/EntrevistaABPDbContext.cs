using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement;
using Volo.Abp.TenantManagement.EntityFrameworkCore;
using WB.EntrevistaABP.Passengers;
using WB.EntrevistaABP.Travels;
using WB.EntrevistaABP.ViajePasajeros;

namespace WB.EntrevistaABP.EntityFrameworkCore;

[ReplaceDbContext(typeof(IIdentityDbContext))]
[ReplaceDbContext(typeof(ITenantManagementDbContext))]
[ConnectionStringName("Default")]
public class EntrevistaABPDbContext :
    AbpDbContext<EntrevistaABPDbContext>,
    IIdentityDbContext,
    ITenantManagementDbContext
{
    /* Add DbSet properties for your Aggregate Roots / Entities here. */
    #region Entities from the modules
    /* Notice: We only implemented IIdentityDbContext and ITenantManagementDbContext
     * and replaced them for this DbContext. This allows you to perform JOIN
     * queries for the entities of these modules over the repositories easily. You
     * typically don't need that for other modules. But, if you need, you can
     * implement the DbContext interface of the needed module and use ReplaceDbContext
     * attribute just like IIdentityDbContext and ITenantManagementDbContext.
     *
     * More info: Replacing a DbContext of a module ensures that the related module
     * uses this DbContext on runtime. Otherwise, it will use its own DbContext class.
     */

    //Identity
    public DbSet<IdentityUser> Users { get; set; }
    public DbSet<IdentityRole> Roles { get; set; }
    public DbSet<IdentityClaimType> ClaimTypes { get; set; }
    public DbSet<OrganizationUnit> OrganizationUnits { get; set; }
    public DbSet<IdentitySecurityLog> SecurityLogs { get; set; }
    public DbSet<IdentityLinkUser> LinkUsers { get; set; }
    public DbSet<IdentityUserDelegation> UserDelegations { get; set; }
    public DbSet<Passenger> Passenger { get; set; }
    public DbSet<Travel> Travel { get; set; }
    // Tenant Management
    public DbSet<Tenant> Tenants { get; set; }
    public DbSet<TenantConnectionString> TenantConnectionStrings { get; set; }
    #endregion
    public EntrevistaABPDbContext(DbContextOptions<EntrevistaABPDbContext> options)
        : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        /* Include modules to your migration db context */
        builder.ConfigurePermissionManagement();
        builder.ConfigureSettingManagement();
        builder.ConfigureBackgroundJobs();
        builder.ConfigureAuditLogging();
        builder.ConfigureIdentity();
        builder.ConfigureOpenIddict();
        builder.ConfigureFeatureManagement();
        builder.ConfigureTenantManagement();
        /* Configure your own tables/entities inside here */

        //builder.Entity<YourEntity>(b =>
        //{
        //    b.ToTable(EntrevistaABPConsts.DbTablePrefix + "YourEntities", EntrevistaABPConsts.DbSchema);
        //    b.ConfigureByConvention();
        //    //...
        //});
        builder.Entity<Passenger>(b =>
        {
            b.ToTable(EntrevistaABPConsts.DbTablePrefix + "Passengers",
                EntrevistaABPConsts.DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.Name).IsRequired().HasMaxLength(128);
            b.Property(x => x.Surname).IsRequired().HasMaxLength(128);
            b.Property(x => x.DNI).IsRequired();
            b.Property(x => x.DateBirth).IsRequired();
        });
        builder.Entity<Travel>(b =>
        {
            b.ToTable(EntrevistaABPConsts.DbTablePrefix + "Travels",
                EntrevistaABPConsts.DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.FechaLlegada).IsRequired();
            b.Property(x => x.FechaSalida).IsRequired();
            b.Property(x => x.Origen).IsRequired().HasMaxLength(128);
            b.Property(x => x.Destino).IsRequired().HasMaxLength(128);
            b.Property(x => x.MedioTransporte).IsRequired();
        });
        builder.Entity<ViajePasajero>(b=>
        {
            b.ToTable(EntrevistaABPConsts.DbTablePrefix+"ViajePasajero",
                EntrevistaABPConsts.DbSchema);
            b.ConfigureByConvention();
            b.HasKey( x=> new{x.IdViaje,x.IdPasajero} );
            b.HasOne<Travel>().WithMany().HasForeignKey(x=>x.IdViaje).IsRequired();
            b.HasOne<Passenger>().WithMany().HasForeignKey(x=>x.IdPasajero).IsRequired();
            b.HasIndex(x=>new{x.IdViaje,x.IdPasajero});
        });
    }
}
