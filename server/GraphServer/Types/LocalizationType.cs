using GraphServer.Models;
using HotChocolate.Types;


namespace GraphServer.Types;

public class LocalizationType : InterfaceType<Localization>
{
    protected override void Configure(IInterfaceTypeDescriptor<Localization> descriptor)
    {
        descriptor.Field(t => t.Id)
            .Type<NonNullType<IdType>>();

        descriptor.Field(t => t.Key)
            .Type<NonNullType<StringType>>();

        descriptor.Field(t => t.Value)
            .Type<NonNullType<StringType>>();

        descriptor.Field(t => t.Language)
            .Type<NonNullType<LanguageType>>();
    }
}